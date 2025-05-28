import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaUserShield, FaSearch } from "react-icons/fa";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [editUser, setEditUser] = useState(null);
  const [confirmAction, setConfirmAction] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          "https://thinkbit-backend.onrender.comapi/user"
        );
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  const handleDelete = (id) => {
    setConfirmAction({
      message: "Are you sure you want to delete this user?",
      onConfirm: async () => {
        try {
          await axios.delete(
            `https://thinkbit-backend.onrender.comapi/user/${id}`
          );
          setUsers(users.filter((user) => user._id !== id));
          setConfirmAction(null);
        } catch (error) {
          console.error("Error deleting user:", error);
        }
      },
    });
  };

  const toggleRole = (id) => {
    setConfirmAction({
      message: "Are you sure you want to change this user's role?",
      onConfirm: async () => {
        try {
          const res = await axios.patch(
            `https://thinkbit-backend.onrender.comapi/user/${id}/toggle-role`
          );
          setUsers(users.map((user) => (user._id === id ? res.data : user)));
          setConfirmAction(null);
        } catch (error) {
          console.error("Error toggling role:", error);
        }
      },
    });
  };

  const handleUpdateUser = () => {
    setConfirmAction({
      message: "Apply these changes to the user?",
      onConfirm: async () => {
        try {
          const res = await axios.put(
            `https://thinkbit-backend.onrender.comapi/user/${editUser._id}`,
            editUser
          );
          setUsers(
            users.map((user) => (user._id === editUser._id ? res.data : user))
          );
          setEditUser(null);
          setConfirmAction(null);
        } catch (error) {
          console.error("Error updating user:", error);
        }
      },
    });
  };

  const filteredUsers = users.filter((user) => {
    return (
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (filterRole ? user.role === filterRole : true) &&
      (filterStatus ? user.status === filterStatus : true)
    );
  });

  return (
    <div className="p-6 max-w-5xl mx-auto text-white">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-400 drop-shadow-lg">
        👤 User Management
      </h2>

      <div className="flex gap-4 mb-6 bg-gray-900 p-4 rounded-lg shadow-lg">
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-600 text-white pl-10 focus:ring-2 focus:ring-blue-500"
            placeholder="🔍 Search by Name or Email"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <select
          className="p-3 rounded-lg bg-gray-700 border border-gray-500 text-white hover:bg-gray-600"
          value={filterRole}
          onChange={(e) => setFilterRole(e.target.value)}>
          <option value="">All Roles</option>
          <option value="student">Student</option>
          <option value="examiner">Examiner</option>
        </select>
        <select
          className="p-3 rounded-lg bg-gray-700 border border-gray-500 text-white hover:bg-gray-600"
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <table className="w-full text-left border-collapse shadow-lg rounded-lg overflow-hidden">
        <thead className="bg-blue-700 text-white">
          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Status</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr
              key={user._id}
              className="bg-gray-800 hover:bg-gray-700 transition-all">
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3 text-blue-400 font-semibold capitalize">
                {user.role}
              </td>
              <td className="p-3 text-green-400 font-semibold">
                {user.status}
              </td>
              <td className="p-3 flex gap-3">
                <button
                  className="text-yellow-400 hover:text-yellow-500"
                  onClick={() => setEditUser(user)}>
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-600"
                  onClick={() => handleDelete(user._id)}>
                  <FaTrash />
                </button>
                <button
                  className="text-purple-400 hover:text-purple-500"
                  onClick={() => toggleRole(user._id)}>
                  <FaUserShield />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Modal */}
      {editUser && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-[90%] max-w-md text-white">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Edit User</h3>
            <input
              type="text"
              className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-600"
              placeholder="Name"
              value={editUser.name}
              onChange={(e) =>
                setEditUser({ ...editUser, name: e.target.value })
              }
            />
            <input
              type="email"
              className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-600"
              placeholder="Email"
              value={editUser.email}
              onChange={(e) =>
                setEditUser({ ...editUser, email: e.target.value })
              }
            />
            <select
              className="w-full p-3 mb-4 rounded bg-gray-800 border border-gray-600"
              value={editUser.role}
              onChange={(e) =>
                setEditUser({ ...editUser, role: e.target.value })
              }>
              <option value="student">Student</option>
              <option value="examiner">Examiner</option>
            </select>
            <select
              className="w-full p-3 mb-6 rounded bg-gray-800 border border-gray-600"
              value={editUser.status}
              onChange={(e) =>
                setEditUser({ ...editUser, status: e.target.value })
              }>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </select>
            <div className="flex justify-end gap-4">
              <button
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                onClick={handleUpdateUser}>
                Update
              </button>
              <button
                className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded"
                onClick={() => setEditUser(null)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Modal */}
      {confirmAction && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-[90%] max-w-sm text-white">
            <h3 className="text-xl font-bold mb-4 text-red-400">
              Confirm Action
            </h3>
            <p className="mb-6">{confirmAction.message}</p>
            <div className="flex justify-end gap-4">
              <button
                onClick={confirmAction.onConfirm}
                className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded">
                Confirm
              </button>
              <button
                onClick={() => setConfirmAction(null)}
                className="bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
