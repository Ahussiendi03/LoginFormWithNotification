import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";
import LogoutModal from "./LogOutModal";
import {
  FaUserClock,
  FaUsers,
  FaUserTimes,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar = () => {
  const navigate = useNavigate();
  const [OpenLogoutModal, setOpenLogoutModal] = useState(false);

  // LOGOUT FUNCTION
  

  return (
    <div className="w-64 bg-slate-900 text-white p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

      <nav className="flex flex-col gap-4">
        <a className="flex items-center gap-3 hover:bg-slate-700 p-3 rounded-lg cursor-pointer">
          <FaUserClock /> Pending Users
        </a>

        <a className="flex items-center gap-3 hover:bg-slate-700 p-3 rounded-lg cursor-pointer">
          <FaUsers /> Approved Users
        </a>

        <a className="flex items-center gap-3 hover:bg-slate-700 p-3 rounded-lg cursor-pointer">
          <FaUserTimes /> Rejected Users
        </a>

        <div className="mt-auto">
          <button
            onClick={() => setOpenLogoutModal(true)}
            className="flex items-center gap-3 hover:bg-red-700 p-3 rounded-lg cursor-pointer w-full text-left"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>

        <LogoutModal 
        isOpen={OpenLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
        />
      </nav>
    </div>
  );
};

export default AdminSidebar;
