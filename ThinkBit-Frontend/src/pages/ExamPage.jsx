import React, { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as faceapi from "face-api.js";

const ExamPage = () => {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [examData, setExamData] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false); // Added submitting state for better handling
  const [fullscreenWarningCount, setFullscreenWarningCount] = useState(0);
  const [tabSwitchCount, setTabSwitchCount] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showFullscreenPrompt, setShowFullscreenPrompt] = useState(false);
  const [faceDetectionConfidence, setFaceDetectionConfidence] = useState(0);
  const [attentionState, setAttentionState] = useState("attentive");
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [soundLevel, setSoundLevel] = useState(0);
  const [backgroundNoiseDetected, setBackgroundNoiseDetected] = useState(false);
  const [isCalibrating, setIsCalibrating] = useState(true);
  const [multiplePersonsDetected, setMultiplePersonsDetected] = useState(false);
  const videoRef = useRef();
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const micStreamRef = useRef(null);
  const faceMonitoringIntervalRef = useRef(null);
  const audioMonitoringRequestRef = useRef(null);
  const baselineNoiseRef = useRef(0);
  const calibrationSamplesRef = useRef(0);
  const noiseAlertTimeoutRef = useRef(null);
  const expressionHistoryRef = useRef([]);
  const multiplePersonAlertTimeoutRef = useRef(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const stopAllMediaTracking = () => {
    console.log("Stopping all media tracking...");

    // Create a Set to track all unique tracks that need to be stopped
    const tracksToStop = new Set();

    // Collect video tracks
    if (videoRef.current && videoRef.current.srcObject) {
      const videoTracks = videoRef.current.srcObject.getTracks();
      videoTracks.forEach((track) => tracksToStop.add(track));
    }

    // Collect microphone tracks (which might be the same as video tracks in some cases)
    if (micStreamRef.current) {
      const audioTracks = micStreamRef.current.getTracks();
      audioTracks.forEach((track) => tracksToStop.add(track));
    }

    // Stop all collected tracks
    tracksToStop.forEach((track) => {
      console.log(`Stopping track: ${track.kind} (${track.id})`);
      track.stop();
    });

    // Only after stopping all tracks, clear the references
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
    micStreamRef.current = null;

    // Clear all intervals and timeouts
    if (faceMonitoringIntervalRef.current) {
      console.log("Clearing face monitoring interval");
      clearInterval(faceMonitoringIntervalRef.current);
      faceMonitoringIntervalRef.current = null;
    }

    // Cancel audio monitoring animation frame
    if (audioMonitoringRequestRef.current) {
      console.log("Cancelling audio monitoring request");
      cancelAnimationFrame(audioMonitoringRequestRef.current);
      audioMonitoringRequestRef.current = null;
    }

    // Close audio context
    if (audioContextRef.current) {
      console.log("Closing audio context");
      audioContextRef.current
        .close()
        .catch((err) => console.error("Error closing audio context:", err));
      audioContextRef.current = null;
    }

    // Clear other timeouts
    if (noiseAlertTimeoutRef.current) {
      clearTimeout(noiseAlertTimeoutRef.current);
      noiseAlertTimeoutRef.current = null;
    }

    if (multiplePersonAlertTimeoutRef.current) {
      clearTimeout(multiplePersonAlertTimeoutRef.current);
      multiplePersonAlertTimeoutRef.current = null;
    }

    console.log("All media tracking stopped");
  };
  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri("/models");
        await faceapi.nets.faceExpressionNet.loadFromUri("/models");
        console.log("Face API models loaded successfully");
        setModelsLoaded(true);
      } catch (error) {
        console.error("Error loading face-api models:", error);
        toast.error("Failed to load face detection models");
        setError(
          "Failed to load face detection models. Please refresh the page."
        );
        setLoading(false);
      }
    };

    const initCamera = async () => {
      // Don't initialize camera if already submitted or submitting
      if (submitted || submitting) {
        console.log(
          "Camera initialization skipped - exam already submitted or submitting"
        );
        return;
      }

      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
        }
        micStreamRef.current = stream;
        initAudioMonitoring(stream);
        if (modelsLoaded) {
          startFaceMonitoring();
        }
        console.log("Camera and microphone initialized");
      } catch (error) {
        toast.error("🎥 Unable to access webcam or microphone.");
        console.error("Media access error:", error);
        setError(
          "Unable to access webcam or microphone. Please check your camera and microphone settings."
        );
        setLoading(false);
      }
    };

    if (!submitted && !submitting) {
      loadModels().then(initCamera);
    }

    return () => {
      // Use our comprehensive cleanup function when component unmounts
      stopAllMediaTracking();
    };
  }, [modelsLoaded, submitted, submitting]);

  const startFaceMonitoring = () => {
    // Don't start monitoring if already submitted or submitting
    if (submitted || submitting) {
      console.log(
        "Face monitoring not started - exam already submitted or submitting"
      );
      return;
    }

    expressionHistoryRef.current = [];
    const expressionHistoryLength = 5;
    let noFaceCount = 0;

    faceMonitoringIntervalRef.current = setInterval(async () => {
      // Exit early if submitted, submitting or component is unmounting
      if (submitted || submitting || !videoRef.current || !modelsLoaded) {
        console.log(
          "Face monitoring interval skipped - exam submitted/submitting or component unmounting"
        );
        return;
      }

      try {
        const detections = await faceapi
          .detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions({
              inputSize: 512,
              scoreThreshold: 0.5,
            })
          )
          .withFaceExpressions();

        if (detections.length > 1) {
          setFaceDetectionConfidence(0);
          setMultiplePersonsDetected(true);
          if (multiplePersonAlertTimeoutRef.current) {
            clearTimeout(multiplePersonAlertTimeoutRef.current);
          }
          multiplePersonAlertTimeoutRef.current = setTimeout(() => {
            toast.error(
              "👥 Multiple people detected! Only you should be visible."
            );
            console.log("Multiple people detected!");
          }, 2000);
          return;
        } else {
          setMultiplePersonsDetected(false);
          if (multiplePersonAlertTimeoutRef.current) {
            clearTimeout(multiplePersonAlertTimeoutRef.current);
            multiplePersonAlertTimeoutRef.current = null;
          }
        }

        if (detections.length === 0) {
          // Instead of instantly dropping to 0, decay gradually
          setFaceDetectionConfidence((prev) => Math.max(prev - 10, 0));
          setAttentionState("no-face");

          noFaceCount++;
          if (noFaceCount >= 3) {
            toast.warn("😶 No face detected! Please stay visible.");
            noFaceCount = 0;
          }
          return;
        }

        noFaceCount = 0; // Reset count if face is detected

        const detection = detections[0];
        setFaceDetectionConfidence(Math.round(detection.detection.score * 100));
        expressionHistoryRef.current.push(detection.expressions);

        if (expressionHistoryRef.current.length > expressionHistoryLength) {
          expressionHistoryRef.current.shift();
        }

        const avgExpressions = {
          neutral: 0,
          happy: 0,
          sad: 0,
          angry: 0,
          fearful: 0,
          disgusted: 0,
          surprised: 0,
        };
        expressionHistoryRef.current.forEach((expr) => {
          for (const emotion in expr) {
            avgExpressions[emotion] += expr[emotion] / expressionHistoryLength;
          }
        });

        const isFocused = avgExpressions.neutral > 0.7;
        const isSleepy =
          avgExpressions.sad > 0.4 && avgExpressions.neutral < 0.5;
        const isDistracted =
          avgExpressions.surprised > 0.4 || avgExpressions.fearful > 0.3;

        if (isSleepy) {
          setAttentionState("sleepy");
          if (
            expressionHistoryRef.current.length >= expressionHistoryLength &&
            expressionHistoryRef.current.every((expr) => expr.sad > 0.3)
          ) {
            toast.info("😴 You appear to be tired. Take a moment if needed!");
          }
        } else if (isDistracted) {
          setAttentionState("distracted");
        } else {
          setAttentionState("attentive");
        }
      } catch (error) {
        console.error("Face monitoring error:", error);
      }
    }, 2000); // Every 2 seconds
  };

  const initAudioMonitoring = (stream) => {
    // Don't initialize audio monitoring if already submitted or submitting
    if (submitted || submitting) {
      console.log(
        "Audio monitoring not started - exam already submitted or submitting"
      );
      return;
    }

    try {
      micStreamRef.current = stream;
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      audioContextRef.current = new AudioContext();
      analyserRef.current = audioContextRef.current.createAnalyser();
      const source = audioContextRef.current.createMediaStreamSource(stream);
      source.connect(analyserRef.current);
      analyserRef.current.fftSize = 2048;
      analyserRef.current.smoothingTimeConstant = 0.3; //changed smoothing
      const bufferLength = analyserRef.current.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);
      let voiceActivityHistory = [];
      const historyLength = 5; // Changed history length
      setIsCalibrating(true);
      baselineNoiseRef.current = 0;
      calibrationSamplesRef.current = 0;
      const calibrationPeriod = 40; // Reduced calibration period

      const checkAudioLevel = () => {
        // Immediately exit the monitoring loop if the component has been submitted/submitting
        if (submitted || submitting) {
          console.log(
            "Audio monitoring stopped due to exam submission/submitting"
          );
          return; // Don't request another animation frame
        }

        if (!analyserRef.current) {
          if (!submitted && !submitting) {
            audioMonitoringRequestRef.current =
              requestAnimationFrame(checkAudioLevel);
          }
          return;
        }

        analyserRef.current.getByteFrequencyData(dataArray);
        const sampleRate = audioContextRef.current.sampleRate;
        const binSize = sampleRate / analyserRef.current.fftSize;
        const minVoiceIdx = Math.floor(300 / binSize);
        const maxVoiceIdx = Math.ceil(3400 / binSize);
        let voiceEnergy = 0;
        let totalSamples = 0;
        for (let i = minVoiceIdx; i <= maxVoiceIdx; i++) {
          if (i < bufferLength) {
            voiceEnergy += dataArray[i];
            totalSamples++;
          }
        }
        const voiceAvg = totalSamples > 0 ? voiceEnergy / totalSamples : 0;
        setSoundLevel(voiceAvg);

        if (isCalibrating) {
          baselineNoiseRef.current =
            calibrationSamplesRef.current === 0
              ? voiceAvg
              : (baselineNoiseRef.current * calibrationSamplesRef.current +
                  voiceAvg) /
                (calibrationSamplesRef.current + 1);
          calibrationSamplesRef.current++;
          if (calibrationSamplesRef.current >= calibrationPeriod) {
            setIsCalibrating(false);
            console.log(
              "Audio calibration complete. Baseline:",
              baselineNoiseRef.current
            );
          }

          // Only continue monitoring if not submitted or submitting
          if (!submitted && !submitting) {
            audioMonitoringRequestRef.current =
              requestAnimationFrame(checkAudioLevel);
          }
          return;
        }

        const isVoiceActivity = voiceAvg > baselineNoiseRef.current * 1.4; // Increased threshold
        voiceActivityHistory.push(isVoiceActivity);
        if (voiceActivityHistory.length > historyLength) {
          voiceActivityHistory.shift();
        }

        const activeFrames = voiceActivityHistory.filter(
          (active) => active
        ).length;
        const voiceActivityRatio = activeFrames / voiceActivityHistory.length;

        if (voiceActivityRatio > 0.6 && voiceActivityHistory.length >= 3) {
          // Adjusted ratio and history
          if (!backgroundNoiseDetected) {
            if (noiseAlertTimeoutRef.current)
              clearTimeout(noiseAlertTimeoutRef.current);
            noiseAlertTimeoutRef.current = setTimeout(() => {
              setBackgroundNoiseDetected(true);
              toast.warning(
                "🔊 Talking detected! Please remain silent during the exam."
              );
              console.log("Talking detected!");
            }, 750);
          }
        } else if (voiceActivityRatio < 0.3 && backgroundNoiseDetected) {
          //adjusted ratio
          if (noiseAlertTimeoutRef.current)
            clearTimeout(noiseAlertTimeoutRef.current);
          noiseAlertTimeoutRef.current = setTimeout(() => {
            setBackgroundNoiseDetected(false);
          }, 1500);
        }

        // Only continue monitoring if not submitted or submitting
        if (!submitted && !submitting) {
          audioMonitoringRequestRef.current =
            requestAnimationFrame(checkAudioLevel);
        }
      };

      checkAudioLevel();
    } catch (error) {
      console.error("Audio monitoring setup error:", error);
    }
  };

  const recalibrateAudioBaseline = () => {
    if (!audioContextRef.current || submitted || submitting) return;
    toast.info("🎙️ Recalibrating audio environment...");
    setIsCalibrating(true);
    baselineNoiseRef.current = 0;
    calibrationSamplesRef.current = 0;
    setBackgroundNoiseDetected(false);
  };

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      toast.success("✅ You're back online!");
    };

    const handleOffline = () => {
      setIsOnline(false);
      toast.error("❌ You're offline! Please check your internet connection.");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(
          `https://thinkbitbackend.netlify.app/api/exam/attempt/${attemptId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Failed to load exam.");
        }
        const data = await res.json();
        setExamData(data);
        const saved = localStorage.getItem(`autosave_${attemptId}`);
        const initialAnswers = {};
        data.questions.forEach(
          (q) => (initialAnswers[q._id] = q.type === "MCQ" ? null : "")
        );
        setSelectedAnswers(saved ? JSON.parse(saved) : initialAnswers);
        const endTime = new Date(data.endTime).getTime();
        const now = Date.now();
        setTimeLeft(Math.max(0, Math.floor((endTime - now) / 1000)));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [attemptId]);

  useEffect(() => {
    if (!examData?.startTime || !examData?.duration || submitted || submitting)
      return;

    const startTime = new Date(examData.startTime).getTime();
    const duration = examData.duration * 60 * 1000;
    const endTime = startTime + duration;

    const timer = setInterval(() => {
      const remaining = Math.max(0, Math.floor((endTime - Date.now()) / 1000));
      setTimeLeft(remaining);
      if (remaining <= 0) {
        clearInterval(timer);
        handleSubmit();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [examData, submitted, submitting]);

  useEffect(() => {
    localStorage.setItem(
      `autosave_${attemptId}`,
      JSON.stringify(selectedAnswers)
    );
  }, [selectedAnswers, attemptId]);

  useEffect(() => {
    const handler = (e) => {
      if (!submitted && !submitting) {
        e.preventDefault();
        e.returnValue = "";
      }
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [submitted, submitting]);

  useEffect(() => {
    const handler = () => {
      if (document.hidden && !submitted && !submitting) {
        setTabSwitchCount((count) => {
          const updated = count + 1;
          if (updated >= 3) {
            toast.error(
              "❌ You switched tabs too many times. Auto-submitting..."
            );
            handleSubmit();
          } else {
            toast.warning("🚫 Tab switching is monitored.");
          }
          return updated;
        });
      }
    };
    document.addEventListener("visibilitychange", handler);
    return () => document.removeEventListener("visibilitychange", handler);
  }, [submitted, submitting]);

  useEffect(() => {
    const reqFS = () => document.documentElement.requestFullscreen?.();
    const checkFS = () => {
      if (!document.fullscreenElement && !submitted && !submitting) {
        setFullscreenWarningCount((count) => {
          const updated = count + 1;
          if (updated >= 3) {
            toast.error("📴 Exited fullscreen 3 times. Auto-submitting.");
            handleSubmit();
          } else {
            setShowFullscreenPrompt(true);
          }
          return updated;
        });
      } else setShowFullscreenPrompt(false);
    };

    if (!submitted && !submitting) {
      reqFS();
      document.addEventListener("fullscreenchange", checkFS);
      return () => document.removeEventListener("fullscreenchange", checkFS);
    }
  }, [submitted, submitting]);

  useEffect(() => {
    const preventActions = (e) => e.preventDefault();
    document.addEventListener("contextmenu", preventActions);
    document.addEventListener("copy", preventActions);
    document.addEventListener("cut", preventActions);
    document.addEventListener("paste", preventActions);

    return () => {
      document.removeEventListener("contextmenu", preventActions);
      document.removeEventListener("copy", preventActions);
      document.removeEventListener("cut", preventActions);
      document.removeEventListener("paste", preventActions);
    };
  }, []);

  const handleMcqSelect = (qid, option) => {
    if (submitted || submitting) return;
    setSelectedAnswers((prev) => ({ ...prev, [qid]: option }));
  };

  const handleSubjective = (qid, val) => {
    if (submitted || submitting) return;
    setSelectedAnswers((prev) => ({ ...prev, [qid]: val }));
  };

  const clearAnswer = (qid) => {
    if (submitted || submitting) return;
    const isMCQ = examData.questions.find((q) => q._id === qid)?.type === "MCQ";
    setSelectedAnswers((prev) => ({ ...prev, [qid]: isMCQ ? null : "" }));
  };

  const handleSubmit = async () => {
    if (submitted || submitting) return;

    // Set both submitting states to prevent reinitialization
    setSubmitting(true);
    setSubmitted(true);

    // Stop all media tracking before submission
    stopAllMediaTracking();

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        "https://thinkbitbackend.netlify.app/api/exam/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ attemptId, answers: selectedAnswers }),
        }
      );
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit.");
      }
      localStorage.removeItem(`autosave_${attemptId}`);
      toast.success("✅ Exam submitted successfully!");
      navigate("/dashboard/student/myexams");
      window.location.reload();
    } catch (err) {
      toast.error(`❌ Submission failed: ${err.message}`);

      // If submission fails, it's still best to keep media off until user explicitly requests to restart
      setSubmitted(false);
      setSubmitting(false);

      // REMOVED: The camera/mic reinitialization that was here in the original code
      toast.info("Click 'Try Again' to continue with the exam.");
    }
  };

  const confirmAndSubmit = () => {
    if (window.confirm("Submit the exam?")) handleSubmit();
  };

  const renderConfidenceIndicator = () => {
    let color = "bg-red-500";
    if (faceDetectionConfidence > 70) color = "bg-green-500";
    else if (faceDetectionConfidence > 40) color = "bg-yellow-500";
    else if (faceDetectionConfidence === 0) color = "bg-gray-500";

    return (
      <div className="flex flex-col items-center">
        <div className="w-full bg-gray-700 rounded-full h-2.5 mb-1">
          <div
            className={`${color} h-2.5 rounded-full`}
            style={{ width: `${faceDetectionConfidence}%` }}></div>
        </div>
        <span className="text-xs text-gray-400">
          Face Detection: {faceDetectionConfidence}%
        </span>
      </div>
    );
  };

  const renderAudioLevelMeter = () => {
    // Scale sound level to 0-100 for display
    const scaledLevel = Math.min(100, Math.max(0, (soundLevel / 120) * 100));
    let color = "bg-green-500";
    if (scaledLevel > 60) color = "bg-red-500";
    else if (scaledLevel > 30) color = "bg-yellow-500";

    return (
      <div className="flex flex-col items-center mt-1">
        <div className="w-full bg-gray-700 rounded-full h-1.5">
          <div
            className={`${color} h-1.5 rounded-full transition-all duration-200`}
            style={{ width: `${scaledLevel}%` }}></div>
        </div>
        <span className="text-xs text-gray-400">Audio</span>
      </div>
    );
  };

  // Add a function to restart the exam if submission fails
  const restartExam = async () => {
    if (submitted || submitting) return;

    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      }
      micStreamRef.current = stream;
      initAudioMonitoring(stream);
      if (modelsLoaded) {
        startFaceMonitoring();
      }
      toast.success("Exam monitoring restarted successfully");
    } catch (error) {
      toast.error("🎥 Unable to access webcam or microphone.");
      console.error("Media restart error:", error);
    }
  };

  if (loading) return <p className="text-white p-10">Loading Exam...</p>;
  if (error) return <p className="text-red-500 p-10">{error}</p>;

  const currentQuestion = examData.questions[currentQuestionIndex];
  if (!currentQuestion) {
    return <p className="text-white p-10">No questions found for this exam.</p>;
  }
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <ToastContainer />
      <div className="fixed bottom-4 right-4 z-50 w-44">
        {/* Video Feed */}
        <div className="relative w-full h-28 rounded-lg overflow-hidden shadow-lg">
          {submitted ? (
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-center text-sm">
              <span>
                Camera disabled
                <br />
                Exam submitted
              </span>
            </div>
          ) : (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className={`${
                multiplePersonsDetected
                  ? "border-4 border-red-500 animate-pulse"
                  : "border-2 border-white"
              } w-full h-full object-cover rounded-lg`}
            />
          )}

          {/* Status Dots - only show if not submitted */}
          {!submitted && (
            <div className="absolute top-1 right-1 flex gap-1 z-10">
              <span
                className={`w-3 h-3 rounded-full ${
                  attentionState === "attentive"
                    ? "bg-green-500"
                    : attentionState === "sleepy" ||
                      attentionState === "distracted"
                    ? "bg-yellow-500"
                    : "bg-red-500"
                }`}
                title={`Attention: ${attentionState}`}></span>
              <span
                className={`w-3 h-3 rounded-full ${
                  isOnline ? "bg-green-500" : "bg-red-500"
                }`}
                title={isOnline ? "Online" : "Offline"}></span>
              <span
                className={`w-3 h-3 rounded-full ${
                  backgroundNoiseDetected
                    ? "bg-red-500 animate-pulse"
                    : "bg-green-500"
                }`}
                title={
                  backgroundNoiseDetected
                    ? "Talking detected"
                    : "Quiet environment"
                }></span>
              <span
                className={`w-3 h-3 rounded-full ${
                  multiplePersonsDetected
                    ? "bg-red-500 animate-pulse"
                    : "bg-green-500"
                }`}
                title={
                  multiplePersonsDetected
                    ? "Multiple people detected!"
                    : "Single person"
                }></span>
            </div>
          )}

          {/* Calibrating Overlay - only show if not submitted */}
          {isCalibrating && !submitted && (
            <div className="absolute top-0 left-0 bg-blue-600 text-white text-xs p-1 rounded z-10">
              Calibrating...
            </div>
          )}
        </div>

        {/* Info Section Below Video - only show if not submitted */}
        {!submitted && (
          <div className="mt-1 bg-black bg-opacity-60 text-white rounded-b-lg px-2 py-1 space-y-1 text-xs">
            {renderConfidenceIndicator()}
            {renderAudioLevelMeter()}
            <div className="flex justify-end">
              <button
                onClick={recalibrateAudioBaseline}
                className="bg-gray-800 text-white text-xs px-1 py-0.5 rounded opacity-70 hover:opacity-100"
                title="Recalibrate audio detection">
                🔄
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Network status alert banner - only show if not submitted */}
      {!isOnline && !submitted && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white p-2 text-center font-bold z-50">
          ⚠️ You are currently offline! Reconnect to continue the exam.
        </div>
      )}

      {/* Multiple persons alert banner - only show if not submitted */}
      {multiplePersonsDetected && !submitted && (
        <div className="fixed top-0 left-0 right-0 bg-red-600 text-white p-2 text-center font-bold z-50 animate-pulse">
          ⚠️ ALERT: Multiple people detected in camera! This may be considered
          cheating.
        </div>
      )}

      {/* Sidebar */}
      <aside className="w-1/6 min-w-[180px] bg-gray-950 border-r border-gray-800 p-4 space-y-4 overflow-y-auto h-full flex flex-col">
        <header className="sticky top-0 bg-gray-950 pb-2 border-b border-gray-800 z-10">
          <h3 className="text-lg font-semibold text-blue-400 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v12h8V4H6z"
                clipRule="evenodd"
              />
            </svg>
            Questions ({examData.questions.length})
          </h3>
        </header>

        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <div className="w-3 h-3 rounded-full bg-blue-600"></div>
            <span>Current</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <div className="w-3 h-3 rounded-full bg-green-600"></div>
            <span>Answered</span>
          </div>
          <div className="flex items-center gap-1 text-xs text-gray-400">
            <div className="w-3 h-3 rounded-full bg-gray-700"></div>
            <span>Unanswered</span>
          </div>
        </div>

        {/* Improved question navigator with vertical layout */}
        <div className="flex flex-col space-y-2">
          {examData.questions.map((question, idx) => {
            // Check if the question has a valid answer
            const isAnswered = Boolean(selectedAnswers[question._id]);
            const isCurrent = currentQuestionIndex === idx;

            return (
              <button
                key={idx}
                aria-label={`Question ${idx + 1}${
                  isAnswered ? " (Answered)" : ""
                }${isCurrent ? " (Current)" : ""}`}
                aria-current={isCurrent ? "true" : "false"}
                onClick={() => setCurrentQuestionIndex(idx)}
                className={`py-2 px-3 rounded-lg transition-all font-medium shadow-sm flex items-center
            ${
              isCurrent
                ? "bg-blue-600 text-white ring-2 ring-blue-300 ring-offset-1 ring-offset-gray-900"
                : isAnswered
                ? "bg-green-600 hover:bg-green-700 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-gray-200"
            }`}>
                <span className="mr-2 font-bold">Q{idx + 1}</span>
                <span className="text-xs ml-auto">
                  {isAnswered ? "Answered" : "Pending"}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-auto pt-4 border-t border-gray-800">
          <div className="text-xs text-gray-400 mb-2">Exam Progress</div>
          <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-600 transition-all"
              style={{
                // Calculate progress based on the actual count of valid answers
                width: `${
                  (Object.values(selectedAnswers).filter(Boolean).length /
                    examData.questions.length) *
                  100
                }%`,
              }}
            />
          </div>
          <div className="text-xs text-gray-400 mt-2 text-right">
            {Object.values(selectedAnswers).filter(Boolean).length} of{" "}
            {examData.questions.length} answered
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 flex justify-between items-center px-6 py-4 bg-gray-850 shadow-md z-10">
          <h2 className="text-2xl font-bold text-blue-300">{examData.name}</h2>
          <div className="text-md font-semibold bg-gray-700 px-4 py-1 rounded-full">
            ⏳ {Math.floor(timeLeft / 60)}:
            {(timeLeft % 60).toString().padStart(2, "0")}
          </div>
          <button
            onClick={confirmAndSubmit}
            className={`bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded-lg transition-all ${
              submitted ? "opacity-50 cursor-not-allowed" : ""
            }`}>
            {submitted ? "Submitting..." : "Submit"}
          </button>
        </header>
        {/* Status indicators bar */}
        <div className="bg-gray-800 px-6 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span
              className={`${
                attentionState === "attentive"
                  ? "bg-green-500"
                  : attentionState === "sleepy"
                  ? "bg-yellow-500"
                  : attentionState === "distracted"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              } inline-block w-2 h-2 rounded-full`}></span>
            <span>
              {attentionState === "attentive"
                ? "You appear attentive"
                : attentionState === "sleepy"
                ? "You appear tired/sleepy"
                : attentionState === "distracted"
                ? "You appear distracted"
                : "No face detected"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`${
                multiplePersonsDetected ? "bg-red-500" : "bg-green-500"
              } inline-block w-2 h-2 rounded-full`}></span>
            <span>
              {multiplePersonsDetected
                ? "Multiple people detected!"
                : "Only you visible"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span
              className={`${
                isOnline ? "bg-green-500" : "bg-red-500"
              } inline-block w-2 h-2 rounded-full`}></span>
            <span>{isOnline ? "Connected" : "Offline"}</span>
          </div>
        </div>
        {/* Question Area */}
        <section className="flex flex-1 p-6 gap-6 overflow-auto">
          {/* Left: Question */}
          <div className="w-1/2 space-y-4">
            <div className="bg-gray-850 p-5 rounded-xl shadow-inner border border-gray-700">
              <h3 className="text-xl font-bold mb-2">
                {currentQuestionIndex + 1}. {currentQuestion.questionText}
              </h3>
              {currentQuestion.marks && (
                <p className="text-sm text-gray-400">
                  Marks: {currentQuestion.marks}
                </p>
              )}
              <p className="mt-2 text-sm text-gray-500 italic">
                Type: {currentQuestion.type}
              </p>
              <button
                onClick={() => clearAnswer(currentQuestion._id)}
                className="mt-4 text-sm text-red-400 hover:text-red-300 underline">
                Clear Answer
              </button>
            </div>
          </div>

          {/* Right: Options/Input */}
          <div className="w-1/2">
            {currentQuestion.type === "MCQ" ? (
              <div className="space-y-4">
                {currentQuestion.options.map((opt, idx) => (
                  <label key={idx} className="block">
                    <input
                      type="radio"
                      name={`question-${currentQuestion._id}`}
                      value={opt}
                      className="hidden"
                      checked={selectedAnswers[currentQuestion._id] === opt}
                      onChange={() => handleMcqSelect(currentQuestion._id, opt)}
                    />
                    <div
                      className={`p-4 border rounded-xl transition-all duration-300 cursor-pointer ${
                        selectedAnswers[currentQuestion._id] === opt
                          ? "bg-blue-500 text-white"
                          : "bg-gray-750 hover:bg-gray-700"
                      }`}>
                      {opt}
                    </div>
                  </label>
                ))}
              </div>
            ) : (
              <textarea
                value={selectedAnswers[currentQuestion._id] || ""}
                onChange={(e) =>
                  handleSubjective(currentQuestion._id, e.target.value)
                }
                rows={10}
                className="w-full p-4 rounded-xl bg-gray-750 text-white border border-gray-700 focus:outline-none focus:ring focus:ring-blue-600 resize-none"
                placeholder="Type your answer here..."
              />
            )}
          </div>
        </section>
      </main>

      {/* Fullscreen Prompt Modal */}
      {showFullscreenPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-gray-850 p-8 rounded-xl shadow-2xl text-center space-y-4">
            <h2 className="text-xl font-bold text-yellow-400">
              ⚠ Fullscreen Required
            </h2>
            <p>Please re-enter fullscreen to continue your exam.</p>
            <button
              onClick={() => {
                document.documentElement.requestFullscreen();
                setShowFullscreenPrompt(false);
              }}
              className="bg-blue-600 px-6 py-2 text-white rounded-lg hover:bg-blue-700">
              Re-enter Fullscreen
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExamPage;
