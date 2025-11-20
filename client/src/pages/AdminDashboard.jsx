import React from "react";
import Sidebar from "../components/AdminSidebar";
import { RiAdminFill } from "react-icons/ri";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <div className="w-full bg-white shadow-md p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-slate-700">
            Welcome, Admin
          </h1>

          <div className="flex items-center gap-3">
            <RiAdminFill className="w-9 h-9" />
            <span className="font-medium text-slate-800">Admin</span>
          </div>
        </div>

        {/* PAGE CONTENT */}
        <div className="p-6">
          <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-slate-700">
                Pending Users
              </h2>
              <p className="text-slate-500 mt-2 text-sm">
                View and approve new accounts.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-slate-700">
                Approved Users
              </h2>
              <p className="text-slate-500 mt-2 text-sm">
                Manage current active users.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h2 className="text-xl font-semibold text-slate-700">
                Rejected Users
              </h2>
              <p className="text-slate-500 mt-2 text-sm">
                View rejected applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
