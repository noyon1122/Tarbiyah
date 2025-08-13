import React, { useContext } from 'react'
import logo from '../assets/images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth';

const Navbar = () => {
  const {user,logout}=useAuth();
  const navigate=useNavigate();
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  return (
    <div className="flex items-center justify-between font-fredoka bg-base-100 shadow-sm text-lg font-medium container  mx-auto px-4">
  <div>
    <Link to={'/'}>
      <img className="w-36 h-20" src={logo} alt="Logo" />
    </Link>
  </div>

  <div>
    <ul className="flex space-x-6 ">
      <li>
        <Link to="/"><div className='hover:text-cyan-600'>Home</div></Link>
      </li>
      <li>
        <Link to="/"><div className='hover:text-cyan-600'>About</div></Link>
      </li>
      <li>
        <Link to="/courses"><div className='hover:text-cyan-600'>Courses</div></Link>
      </li>
      <li>
        <Link to="/"><div className='hover:text-cyan-600'>Teachers</div></Link>
      </li>
      <li>
        <Link to="/"><div className='hover:text-cyan-600'>Blog</div></Link>
      </li>
    </ul>
  </div>

 <div className="mr-10 text-right">
   {user ? (
          <button
            onClick={handleLogout}
            className="text-white bg-cyan-600 hover:bg-cyan-700 rounded-full px-8 py-1 text-center"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="text-white bg-cyan-600 hover:bg-cyan-700 rounded-full px-10 py-1 text-center">
              Login
            </button>
          </Link>
        )}
  </div>
</div>

  )
}

export default Navbar