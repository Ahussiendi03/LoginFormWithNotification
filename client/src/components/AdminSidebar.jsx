import React, { useState  } from "react";
import { useNavigate, Link } from "react-router-dom";
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
  

  return (
    <div className="w-64 bg-slate-900 text-white p-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-10">Admin Panel</h2>

      <nav className="flex flex-col gap-4">
        <Link to="/admin-dashboard" className="flex items-center gap-3 hover:bg-slate-700 p-3 rounded-lg cursor-pointer">
          <FaUserClock /> Dashboard
        </Link>

        <Link to="/pending-users" className="flex items-center gap-3 hover:bg-slate-700 p-3 rounded-lg cursor-pointer">
          <FaUserClock /> Pending Users
        </Link>

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
