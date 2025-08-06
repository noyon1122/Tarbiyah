import React from 'react'
import useAuth from '../../hooks/useAuth';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import profile from '../../assets/images/profile.png'
import { RxDashboard } from "react-icons/rx";
import { PiUserList } from "react-icons/pi";
import { TbListCheck } from "react-icons/tb";
import { GiMoneyStack } from "react-icons/gi";
import { BiUserCheck } from "react-icons/bi";
import { BiBookReader } from "react-icons/bi";
import { BsCheckCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
const StudentLayout = () => {
    const { logout,user } = useAuth();
    const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
  <div>
      {/* Profile Section */}
      <div className="bg-cyan-600 h-80 flex items-center gap-6">
        <div className="py-16 pl-32 rounded-md">
          <img src={profile} alt="" className="w-44 h-44 rounded-md" />
        </div>
        <div className="text-white">
          <h1 className="text-2xl font-medium">{user?.firstName} {user?.lastName}</h1>
          <h1 className="text-lg">CEO Of M&H Enterprise</h1>
        </div>
      </div>

      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen bg-[#ffffff]">
        {/* Sidebar */}
        <aside className="bg-white border-r md:col-span-1 p-6">
          <nav className="space-y-3">
           <div className='flex items-center hover:text-cyan-600 gap-2'><RxDashboard className=''/> <Link to="/student/dashboard" className=" font-medium block"> Dashboard</Link></div>
           <div className='flex items-center hover:text-cyan-600 gap-2'><PiUserList /><Link to="/student/profile" className=" font-medium block">My Profile</Link></div>
           <div className='flex items-center hover:text-cyan-600 gap-2'><TbListCheck /><Link to="/student/attendence" className="hover:text-cyan-600 font-medium block">My Attendence</Link></div>  
           <div className='flex items-center hover:text-cyan-600 gap-2'><GiMoneyStack /><Link to="/student/fees" className="hover:text-cyan-600 font-medium block">My Fees</Link></div> 
           <div className='flex items-center hover:text-cyan-600 gap-2'><BiUserCheck /> <Link to="/student/course-enroll" className="hover:text-cyan-600 font-medium block">Enrolled Course</Link></div> 
           <div className='flex items-center hover:text-cyan-600 gap-2'><BiBookReader /><Link to="/student/course-active" className="hover:text-cyan-600 font-medium block">Active Course</Link></div> 
           <div className='flex items-center hover:text-cyan-600 gap-2'><BsCheckCircle /><Link to="/student/course-complete" className="hover:text-cyan-600 font-medium block">Completed Course</Link></div> 
           <div className='flex items-center hover:text-cyan-600 gap-2'><IoSettingsOutline /><Link to="/student/settings" className="hover:text-cyan-600 font-medium block">Settings</Link></div> 

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

export default StudentLayout