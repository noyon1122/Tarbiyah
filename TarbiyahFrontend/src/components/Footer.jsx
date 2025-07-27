import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    //#013848
    return (
        <div className="bg-[#0f4356] font-fredoka">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mx-6 md:mx-16 py-20 text-white items-start">
    {/* Logo + About */}
    <div>
     <div className='flex '>
         <Link to="/">
        <img className="w-36 h-16" src={logo} alt="Logo" />
      </Link> 
       <h1 className="text-white text-3xl font-medium">Tarbiyah</h1>
     </div>
     <div>
         <p className="leading-relaxed">
        It is an Islamic education platform dedicated to nurturing minds and hearts through authentic knowledge, modern teaching methods, and a value-based learning environment.
      </p>
     </div>
    </div>

    {/* Get In Touch */}
    <div>
      <h2 className="text-cyan-400 text-3xl font-medium mb-3">Get In Touch</h2>
      <div className="space-y-2">

        <div className="flex items-center gap-3">
          <MdLocationPin className="mt-1 w-6 h-6 text-cyan-400" />
           <h1 className='text-2xl font-medium'>Address:</h1>
        </div>
         <h1 className='ml-10'>Bashundhara R/A Block-D, Road-4, House-43/G</h1>
        <div className="flex items-center gap-3">
          <MdEmail  className="mt-1 w-6 h-6 text-cyan-400" />
            <h1 className='text-2xl font-medium'>Email:</h1>
        </div>
        <h1 className='ml-10'>tarbiyah@gmail.com</h1>
         
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="mt-1 w-6 h-6 text-cyan-400" />
            <h1 className='text-2xl font-medium'>Phone:</h1>
        </div>
         <h1 className='ml-10'>+8801572907980</h1>
      </div>
    </div>

    {/* Quick Links */}
    <div>
      <h2 className="text-cyan-400 text-3xl font-medium mb-3">Quick Links</h2>
      <ul className="space-y-1">
        <li><Link to="/" className='flex items-center gap-1'><span className="text-white text-xl font-semibold">&gt;</span> Home</Link></li>
        <li><Link to="/about" className='flex items-center gap-1'><span className="text-white text-xl font-semibold">&gt;</span> About Us</Link></li>
        <li><Link to="/classes" className='flex items-center gap-1'><span className="text-white text-xl font-semibold">&gt;</span> Our Classes</Link></li>
        <li><Link to="/teachers" className='flex items-center gap-1'><span className="text-white text-xl font-semibold">&gt;</span> Our Teachers</Link></li>
        <li><Link to="/blog" className='flex items-center gap-1'><span className="text-white text-xl font-semibold">&gt;</span> Blogs</Link></li>
        <li><Link to="/contact" className='flex items-center gap-1'><span className="text-white text-xl font-semibold">&gt;</span> Contact Us</Link></li>
      </ul>
    </div>

    {/* Newsletter */}
    <div>
      <h2 className="text-cyan-400 text-3xl font-medium mb-3">Newsletter</h2>
      <div className="flex flex-col gap-3">
        <input type="text" className="px-4 py-3 rounded-sm text-black" placeholder="Your Name" />
        <input type="email" className="px-4 py-3 rounded-sm text-black" placeholder="Your Email" />
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-6 py-3 text-sm"
        >
          Submit Now
        </button>
      </div>
    </div>
  </div>
  <hr className='text-cyan-300' /> 
</div>

    )
}

export default Footer