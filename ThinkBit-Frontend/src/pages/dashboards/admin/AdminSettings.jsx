// import React, { useState } from "react";
// import {
//   FaUserCog,
//   FaKey,
//   FaEnvelope,
//   FaPalette,
//   FaShieldAlt,
//   FaDatabase,
//   FaSave,
// } from "react-icons/fa";

// const AdminSettings = () => {
//   const [adminDetails, setAdminDetails] = useState({
//     name: "Admin Name",
//     email: "admin@example.com",
//     password: "",
//   });

//   const [theme, setTheme] = useState("Light");
//   const [security, setSecurity] = useState(true);
//   const [backup, setBackup] = useState(false);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAdminDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   return (
//     <div className="p-6 max-w-4xl mx-auto text-white">
//       <h2 className="text-4xl font-bold mb-6 text-center text-green-400 drop-shadow-lg">
//         ⚙️ Admin Settings
//       </h2>

//       {/* Profile Settings */}
//       <div className="bg-gray-900 p-6 rounded-xl shadow-lg mb-6">
//         <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
//           <FaUserCog /> Profile Settings
//         </h3>
//         <div className="space-y-4">
//           <div className="flex flex-col">
//             <label className="text-gray-400">Admin Name</label>
//             <div className="relative">
//               <FaUserCog className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="text"
//                 name="name"
//                 value={adminDetails.name}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-400">Email</label>
//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="email"
//                 name="email"
//                 value={adminDetails.email}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-400">New Password</label>
//             <div className="relative">
//               <FaKey className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="password"
//                 name="password"
//                 value={adminDetails.password}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* System Settings */}
//       <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
//         <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
//           <FaShieldAlt /> System Settings
//         </h3>
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-400 flex items-center gap-2">
//               <FaPalette /> Theme
//             </span>
//             <select
//               className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none"
//               value={theme}
//               onChange={(e) => setTheme(e.target.value)}>
//               <option value="Light">Light</option>
//               <option value="Dark">Dark</option>
//               <option value="Auto">Auto</option>
//             </select>
//           </div>

//           <div className="flex justify-between items-center">
//             <span className="text-gray-400 flex items-center gap-2">
//               <FaShieldAlt /> Enable Security Features
//             </span>
//             <input
//               type="checkbox"
//               checked={security}
//               onChange={() => setSecurity(!security)}
//               className="w-6 h-6"
//             />
//           </div>

//           <div className="flex justify-between items-center">
//             <span className="text-gray-400 flex items-center gap-2">
//               <FaDatabase /> Enable Auto Backups
//             </span>
//             <input
//               type="checkbox"
//               checked={backup}
//               onChange={() => setBackup(!backup)}
//               className="w-6 h-6"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Save Button */}
//       <div className="mt-6 text-center">
//         <button className="bg-green-500 px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:bg-green-600 transition-all">
//           <FaSave /> Save Settings
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AdminSettings;


// import React, { useState } from "react";
// import {
//   FaUserCog,
//   FaKey,
//   FaEnvelope,
//   FaPalette,
//   FaShieldAlt,
//   FaDatabase,
//   FaSave,
//   FaUserCircle,
// } from "react-icons/fa";
// import { motion } from "framer-motion";
// import toast, { Toaster } from "react-hot-toast";

// const AdminSettings = () => {
//   const [adminDetails, setAdminDetails] = useState({
//     name: "Admin Name",
//     email: "admin@example.com",
//     password: "",
//   });
//   const [theme, setTheme] = useState("Light");
//   const [security, setSecurity] = useState(true);
//   const [backup, setBackup] = useState(false);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setAdminDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
//   };

//   // Handle Save Settings
//   const handleSaveSettings = () => {
//     toast.success("Settings updated successfully!");
//   };

//   return (
//     <div className="p-8 max-w-4xl mx-auto text-white">
//       <Toaster />
//       <motion.h2
//         className="text-4xl font-bold mb-6 text-center text-green-400 drop-shadow-lg"
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}>
//         ⚙️ Admin Settings
//       </motion.h2>

//       {/* Profile Section */}
//       <motion.div
//         className="bg-gray-900 p-8 rounded-xl shadow-xl mb-6 backdrop-blur-lg bg-opacity-80"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}>
//         <div className="text-center mb-6">
//           <FaUserCircle className="text-7xl text-green-300 mx-auto" />
//           <p className="text-gray-400 mt-2">
//             Manage your admin account settings
//           </p>
//         </div>

//         <div className="space-y-4">
//           <div className="flex flex-col">
//             <label className="text-gray-400">Admin Name</label>
//             <div className="relative">
//               <FaUserCog className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="text"
//                 name="name"
//                 value={adminDetails.name}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none border border-gray-700 hover:border-green-400 transition"
//               />
//             </div>
//           </div>

//           <div className="flex flex-col">
//             <label className="text-gray-400">Email</label>
//             <div className="relative">
//               <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="email"
//                 name="email"
//                 value={adminDetails.email}
//                 onChange={handleChange}
//                 className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none border border-gray-700 hover:border-green-400 transition"
//               />
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* System Settings */}
//       <motion.div
//         className="bg-gray-900 p-8 rounded-xl shadow-xl backdrop-blur-lg bg-opacity-80"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}>
//         <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
//           <FaShieldAlt /> System Settings
//         </h3>
//         <div className="space-y-4">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-400 flex items-center gap-2">
//               <FaPalette /> Theme
//             </span>
//             <select
//               className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none border border-gray-700 hover:border-green-400 transition"
//               value={theme}
//               onChange={(e) => setTheme(e.target.value)}>
//               <option value="Light">Light</option>
//               <option value="Dark">Dark</option>
//               <option value="Auto">Auto</option>
//             </select>
//           </div>

//           <div className="flex justify-between items-center">
//             <span className="text-gray-400 flex items-center gap-2">
//               <FaShieldAlt /> Enable Security Features
//             </span>
//             <input
//               type="checkbox"
//               checked={security}
//               onChange={() => setSecurity(!security)}
//               className="w-6 h-6 cursor-pointer"
//             />
//           </div>

//           <div className="flex justify-between items-center">
//             <span className="text-gray-400 flex items-center gap-2">
//               <FaDatabase /> Enable Auto Backups
//             </span>
//             <input
//               type="checkbox"
//               checked={backup}
//               onChange={() => setBackup(!backup)}
//               className="w-6 h-6 cursor-pointer"
//             />
//           </div>
//         </div>
//       </motion.div>

//       {/* Save Button */}
//       <motion.div
//         className="mt-6 text-center"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}>
//         <button
//           onClick={handleSaveSettings}
//           className="bg-green-500 px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:bg-green-600 transition-all">
//           <FaSave /> Save Settings
//         </button>
//       </motion.div>
//     </div>
//   );
// };

// export default AdminSettings;


import React, { useState } from "react";
import {
  FaUserCog,
  FaKey,
  FaEnvelope,
  FaPalette,
  FaShieldAlt,
  FaDatabase,
  FaSave,
} from "react-icons/fa";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";

const AdminSettings = () => {
  const [adminDetails, setAdminDetails] = useState({
    name: "Admin Name",
    email: "admin@example.com",
    password: "",
  });

  const [theme, setTheme] = useState("Dark");
  const [security, setSecurity] = useState(true);
  const [backup, setBackup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSave = () => {
    toast.success("Settings saved successfully!", { position: "top-center" });
  };

  return (
    <motion.div
      className="p-6 max-w-4xl mx-auto text-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <Toaster />
      <h2 className="text-4xl font-bold mb-6 text-center text-green-400 drop-shadow-lg">
        ⚙️ Admin Settings
      </h2>

      {/* Profile Settings */}
      <motion.div
        className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg mb-6"
        whileHover={{ scale: 1.02 }}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaUserCog /> Profile Settings
        </h3>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-gray-400">Admin Name</label>
            <div className="relative">
              <FaUserCog className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={adminDetails.name}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400">Email</label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={adminDetails.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-400">New Password</label>
            <div className="relative">
              <FaKey className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                name="password"
                value={adminDetails.password}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* System Settings */}
      <motion.div
        className="bg-gray-900 bg-opacity-80 backdrop-blur-md p-6 rounded-xl shadow-lg"
        whileHover={{ scale: 1.02 }}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <FaShieldAlt /> System Settings
        </h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-400 flex items-center gap-2">
              <FaPalette /> Theme
            </span>
            <select
              className="bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              value={theme}
              onChange={(e) => setTheme(e.target.value)}>
              <option value="Light">Light</option>
              <option value="Dark">Dark</option>
              <option value="Auto">Auto</option>
            </select>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400 flex items-center gap-2">
              <FaShieldAlt /> Enable Security Features
            </span>
            <input
              type="checkbox"
              checked={security}
              onChange={() => setSecurity(!security)}
              className="w-6 h-6 accent-green-500"
            />
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-400 flex items-center gap-2">
              <FaDatabase /> Enable Auto Backups
            </span>
            <input
              type="checkbox"
              checked={backup}
              onChange={() => setBackup(!backup)}
              className="w-6 h-6 accent-green-500"
            />
          </div>
        </div>
      </motion.div>

      {/* Save Button */}
      <div className="mt-6 text-center">
        <motion.button
          className="bg-green-500 px-6 py-3 rounded-lg flex items-center gap-2 shadow-lg hover:bg-green-600 transition-all"
          whileHover={{ scale: 1.05 }}
          onClick={handleSave}>
          <FaSave /> Save Settings
        </motion.button>
      </div>
    </motion.div>
  );
};

export default AdminSettings;
