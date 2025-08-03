import React from 'react'
import useAuth from '../../hooks/useAuth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import profile from '../../assets/images/profile.png'
const AdminLayout = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <div>
      {/* Profile Section */}
      <div className="bg-cyan-400 h-80 flex items-center gap-6">
        <div className="py-16 pl-32 rounded-md">
          <img src={profile} alt="" className="w-44 h-44 rounded-md" />
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-medium">Md Mehedi Hasan</h1>
          <h1 className="text-lg">CEO Of M&H Enterprise</h1>
        </div>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen bg-[#ffffff]">
        {/* Sidebar */}
        <aside className="bg-white border-r md:col-span-1 p-6">
          <nav className="space-y-3">
            <Link to="/admin/dashboard" className="hover:text-cyan-600 font-medium block">Dashboard</Link>
            <Link to="/admin/profile" className="hover:text-cyan-600 font-medium block">My Profile</Link>
            <Link to="/admin/teacher" className="hover:text-cyan-600 font-medium block">Manage Teacher</Link>
            <Link to="/admin/student" className="hover:text-cyan-600 font-medium block">Manage Student</Link>
            <Link to="/admin/presence" className="hover:text-cyan-600 font-medium block">Presence</Link>
            <Link to="/admin/communication" className="hover:text-cyan-600 font-medium block">Communication</Link>
            <Link to="/admin/event" className="hover:text-cyan-600 font-medium block">Event</Link>
            <Link to="/admin/message" className="hover:text-cyan-600 font-medium block">Message</Link>
            <Link to="/admin/settings" className="hover:text-cyan-600 font-medium block">Settings</Link>

            <div className="mt-10 text-gray-500 font-medium">
              <button onClick={handleLogout}>Logout</button>
            </div>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="md:col-span-3 px-6 py-4">
          <Outlet />
        </main>
      </div>
    </div>
  );

}

export default AdminLayout