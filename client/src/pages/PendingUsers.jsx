import React, { useEffect, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import axios from "axios";

const PendingUsers = () => {
  const [pendingUsers, setPendingUsers] = useState([]);

  // FETCH USERS WITH PENDING STATUS
  const fetchPendingUsers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/auth/pending-users');
      setPendingUsers(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load pending users.");
    }
  };

  useEffect(() => {
    fetchPendingUsers();
  }, []);

  const approveUser = async (userId) => {
  try {
    const res = await axios.post(`http://localhost:5000/api/auth/admin/approve-user/${userId}`);
    alert(res.data.message);
  } catch (err) {
    alert("Error approving user");
  }
};

const rejectUser = async (userId) => {
  try {
    const res = await axios.post(`http://localhost:5000/api/auth/admin/reject-user/${userId}`);
    alert(res.data.message);
  } catch (err) {
    alert("Error rejecting user");
  }
};

  return (
    <div className="flex h-screen">
      <AdminSidebar />

      <div className="flex-1 p-10 bg-slate-100">
        <h1 className="text-3xl font-bold mb-6">Pending Users</h1>

        {/* TABLE */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-800 text-white">
                <th className="p-3 text-left">First Name</th>
                <th className="p-3 text-left">Last Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {pendingUsers.length === 0 ? (
                <tr>
                  <td colSpan="4" className="p-5 text-center text-slate-500">
                    No pending users.
                  </td>
                </tr>
              ) : (
                pendingUsers.map((user) => (
                  <tr key={user._id} className="border-b hover:bg-slate-100">
                    <td className="p-3">{user.firstName}</td>
                    <td className="p-3">{user.lastName}</td>
                    <td className="p-3">{user.email}</td>

                    {/* ACTION BUTTONS */}
                    <td className="p-3 flex gap-3">
                      <button 
                      onClick={() => approveUser(user._id)}
                        className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                      >
                        Approve
                      </button>

                      <button
                      onClick={() => rejectUser(user._id)}
                        className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                      >
                        Reject
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PendingUsers;
