import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
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
        <Link to="/"><div className='hover:text-cyan-600'>Classes</div></Link>
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
    <Link to="/login"><button type="button" className="text-white bg-cyan-600 hover:bg-cyan-700   rounded-full text-1xl  px-10 py-1 text-center me-2 mb-2 ">LogIn</button></Link>
  </div>
</div>

  )
}

export default Navbar