import React from "react";
import  Button  from "../components/ui/button";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaLaptopCode,
  FaCertificate,
  FaQuoteLeft,
  FaUserCheck,
  FaPenFancy,
  FaChartBar,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Amit Sharma",
    feedback:
      "ThinkBit transformed our online exams! Secure, fast, and user-friendly.",
    role: "Educator",
  },
  {
    name: "Neha Verma",
    feedback:
      "The automated grading system saved hours of work. Highly recommended!",
    role: "Exam Coordinator",
  },
  {
    name: "Rohan Mehta",
    feedback:
      "Seamless experience with instant certification. Great UI and easy navigation.",
    role: "Student",
  },
];

const isLoggedin=localStorage.getItem("token");

const LandingPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative text-center py-32 px-8 flex flex-col items-center justify-center min-h-[90vh]">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          ThinkBit: The Future of Online Exams
        </motion.h1>
        <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto">
          Elevate your exam experience with <b>secure</b>, <b> AI-driven </b>,
          and <b> automated </b> assessments. Real-time grading, instant
          certifications, and a smooth test-taking experience for students and
          educators.
        </p>
        <motion.div
          className="mt-8 flex space-x-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}>
          {isLoggedin ? (
            <Link to="/profile">
              <Button variant="primary" size="lg">
                Profile
              </Button>
            </Link>
          ) : (
            <Link to="/auth">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>
          )}

          <Link to="/exam">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </motion.div>
        <p className="mt-6 text-sm text-gray-400">
          Trusted by <b> 10,000+ students </b> and{" "}
          <b> 100+ institutions worldwide </b>.
        </p>
      </section>

      {/* Why Choose ThinkBit? */}
      <section className="py-20 px-8 bg-gray-800 rounded-t-3xl">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          Why Choose ThinkBit?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: (
                <FaCheckCircle className="text-4xl text-green-400 mx-auto" />
              ),
              title: "Secure & Fair Exams",
              description: "Advanced cheating prevention mechanisms.",
            },
            {
              icon: <FaLaptopCode className="text-4xl text-blue-400 mx-auto" />,
              title: "Automated Grading",
              description: "Instant results and performance analytics.",
            },
            {
              icon: (
                <FaCertificate className="text-4xl text-yellow-400 mx-auto" />
              ),
              title: "Instant Certification",
              description: "Earn and download professional certificates.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-8 rounded-xl shadow-lg text-center hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}>
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How It Works - New Section */}
      <section className="py-20 px-8 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          How It Works?
        </h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              icon: (
                <FaUserCheck className="text-4xl text-orange-400 mx-auto" />
              ),
              title: "Register & Schedule",
              description: "Sign up and choose your exam date with ease.",
            },
            {
              icon: <FaPenFancy className="text-4xl text-blue-400 mx-auto" />,
              title: "Take the Exam Securely",
              description: "AI-powered anti-cheating with a smooth interface.",
            },
            {
              icon: <FaChartBar className="text-4xl text-green-400 mx-auto" />,
              title: "Get Instant Results",
              description: "Automated grading, analytics, and certification.",
            },
          ].map((step, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-8 rounded-xl shadow-lg text-center hover:scale-105 transition-all"
              whileHover={{ scale: 1.05 }}>
              {step.icon}
              <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-100 mb-12">
          What Our Users Say
        </h2>
        <div className="max-w-5xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-6 rounded-xl shadow-md"
              whileHover={{ scale: 1.03 }}>
              <FaQuoteLeft className="text-2xl text-purple-400 mb-4" />
              <p className="text-lg text-gray-200">"{testimonial.feedback}"</p>
              <p className="mt-3 font-semibold text-purple-400">
                - {testimonial.name}, {testimonial.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-8 bg-gray-900 text-center rounded-t-3xl">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-white">
            Join the Future of Digital Examinations
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mt-4">
            Take exams in a <b> secure environment </b>, get{" "}
            <b> instant results </b>, and earn <b> certifications </b> that
            matter. Start your journey with ThinkBit today.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            {isLoggedin ? (
              <Link to="/profile">
                <Button variant="primary" size="lg">
                  Profile
                </Button>
              </Link>
            ) : (
              <Link to="/auth">
                <Button variant="primary" size="lg">
                  Sign Up
                </Button>
              </Link>
            )}
            <Button variant="secondary" size="lg">
              Request a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            <b> No credit card required. </b> Get started for free!
          </p>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 py-12 px-8 text-center">
        <h3 className="text-2xl font-bold text-white">ThinkBit</h3>
        <p className="mt-3 max-w-md mx-auto">
          The most advanced and secure online exam platform designed for the
          future of education.
        </p>
        <p className="mt-6 text-sm">
          &copy; 2025 ThinkBit. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
