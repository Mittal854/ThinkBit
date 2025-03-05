const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   try {
//     // Extract token from Authorization header (format: Bearer <token>)
//     const authHeader = req.header("Authorization");
//     if (!authHeader) {
//       return res
//         .status(401)
//         .json({ message: "Access Denied. No token provided." });
//     }

//     const token = authHeader.split(" ")[1]; // Extract token from "Bearer <token>"
//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "Access Denied. Invalid token format." });
//     }

//     // Verify token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     console.error("JWT Verification Error:", error.message);
//     return res.status(401).json({ message: "Invalid or expired token" });
//   }
// };

const verifyToken = (req, res, next) => {
  try {
    console.log("Incoming request:", req.method, req.url);
    const authHeader = req.header("Authorization");

    if (!authHeader) {
      console.error("No Authorization header provided");
      return res
        .status(401)
        .json({ message: "Access Denied. No token provided." });
    }

    const token = authHeader.split(" ")[1]?.trim();
    if (!token) {
      console.error("Invalid token format");
      return res
        .status(401)
        .json({ message: "Access Denied. Invalid token format." });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Decoded Token:", decoded);

    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ message: "Token expired, please log in again" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid token" });
    }
    console.error("JWT Verification Error:", error.message);
    return res.status(401).json({ message: "Invalid or expired token" });
  }

};

// const authorizeRole = (roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res.status(403).json({ message: "Unauthorized access" });
//     }
//     next();
//   };
// };

const authorizeRole = (roles = []) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res.status(401).json({ message: "User role not found in token" });
    }

    if (roles.length > 0 && !roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Unauthorized access" });
    }

    next();
  };
};

module.exports = { verifyToken, authorizeRole };

