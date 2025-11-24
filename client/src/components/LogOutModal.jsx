// LogoutModal.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";


const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
    const navigate = useNavigate();
    const handleLogout = () => {
    // remove token (if stored)
    localStorage.removeItem("authToken");
    localStorage.removeItem("userRole");

    // redirect to login page
    navigate("/");
  };
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50"
    >
      <div className="bg-white/40 p-6 rounded-lg shadow-lg w-80 text-center border border-slate-950 shadow-slate-900/60">
        <h2 className="text-lg font-semibold mb-4 text-black">Logout?</h2>
        <p className="mb-6 text-black">Are you sure you want to logout?</p>

        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-md text-black hover:bg-gray-500 border border-black"
          >
            Cancel
          </button>

          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md flex gap-1 items-center hover:bg-red-700 border border-red-950"
          >
            Logout <IoLogOutOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
