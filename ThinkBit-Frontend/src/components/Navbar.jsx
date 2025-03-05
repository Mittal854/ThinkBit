// import { useState } from "react";
// import { Menu } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-md bg-gray-800 text-white shadow-md z-50 p-4 flex justify-between items-center">
//       <Link to="/">
//         <div className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//           ThinkBit
//         </div>
//       </Link>
//       <div
//         className="md:hidden cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </div>
//       <ul
//         className={`md:flex space-x-6 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto md:flex-row flex-col items-center transition-all duration-300 ${
//           isOpen
//             ? "top-16 opacity-100"
//             : "top-[-200px] opacity-0 md:opacity-100"
//         }`}>
//         {["Home", "Dashboard", "Exam", "Results"].map((item, index) => (
//           <li key={index}>
//             <Link
//               to={item.toLowerCase()}
//               className="block py-2 px-6 text-lg font-medium hover:text-blue-400 transition duration-300">
//               {item}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const isLoggedIn = false; // Replace this with actual authentication logic

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-md bg-gray-800 text-white shadow-md z-50 p-4 flex justify-between items-center">
//       <Link to="/">
//         <div className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//           ThinkBit
//         </div>
//       </Link>
//       <div
//         className="md:hidden cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </div>
//       <ul
//         className={`md:flex space-x-6 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto md:flex-row flex-col items-center transition-all duration-300 ${
//           isOpen
//             ? "top-16 opacity-100"
//             : "top-[-200px] opacity-0 md:opacity-100"
//         }`}>
//         {["Home", "Dashboard", "Exam"].map((item, index) => (
//           <li key={index}>
//             <Link
//               to={item.toLowerCase()}
//               className="block py-2 px-6 text-lg font-medium hover:text-blue-400 transition duration-300">
//               {item}
//             </Link>
//           </li>
//         ))}
//         <li>
//           <Link
//             to={isLoggedIn ? "/profile" : "/login"}
//             className="block py-2 px-6 text-lg font-medium hover:text-blue-400 transition duration-300">
//             {isLoggedIn ? "Profile" : "Login"}
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-md bg-gray-800 text-white shadow-md z-50 p-4 flex justify-between items-center">
//       <Link to="/">
//         <div className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
//           ThinkBit
//         </div>
//       </Link>
//       <div
//         className="md:hidden cursor-pointer"
//         onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? <X size={28} /> : <Menu size={28} />}
//       </div>
//       <ul
//         className={`md:flex space-x-6 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto md:flex-row flex-col items-center transition-all duration-300 ${
//           isOpen
//             ? "top-16 opacity-100"
//             : "top-[-200px] opacity-0 md:opacity-100"
//         }`}>
//         {["Home", "Dashboard", "Exam"].map((item, index) => (
//           <li key={index}>
//             <Link
//               to={item.toLowerCase()}
//               className="block py-2 px-6 text-lg font-medium hover:text-blue-400 transition duration-300">
//               {item}
//             </Link>
//           </li>
//         ))}
//         <li>
//           <Link
//             to={isLoggedIn ? "/profile" : "/auth"}
//             className="block py-2 px-6 text-lg font-medium hover:text-blue-400 transition duration-300">
//             {isLoggedIn ? "Profile" : "Login"}
//           </Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    // Listen for storage changes (login/logout updates)
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-opacity-30 backdrop-blur-md bg-gray-800 text-white shadow-md z-50 p-4 flex justify-between items-center">
      <Link to="/">
        <div className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          ThinkBit
        </div>
      </Link>
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
      <ul
        className={`md:flex space-x-6 absolute md:static bg-gray-800 md:bg-transparent w-full md:w-auto md:flex-row flex-col items-center transition-all duration-300 ${
          isOpen
            ? "top-16 opacity-100"
            : "top-[-200px] opacity-0 md:opacity-100"
        }`}>
        {["Home", "Dashboard", "Exam"].map((item, index) => (
          <li key={index}>
            <Link
              to={item.toLowerCase()}
              className="block py-2 px-6 text-lg font-medium hover:text-blue-400 transition duration-300">
              {item}
            </Link>
          </li>
        ))}
        <li>
          <Link
            to={isLoggedIn ? "/profile" : "/auth"}
            className="block py-2 px-6 text-lg font-medium hover:text-blue-400 transition duration-300">
            {isLoggedIn ? "Profile" : "Login"}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
