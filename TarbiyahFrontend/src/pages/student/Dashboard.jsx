import React from 'react'
import { FaUserCheck } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { RiCheckboxCircleFill } from "react-icons/ri"
const Dashboard = () => {
  return (
    <div>

      <div className='grid grid-cols-3 gap-6 my-10'>
         <div className='shadow-xl flex flex-col items-center p-6 space-y-2'>
            <div className='rounded-full bg-blue-100 hover:bg-cyan-700'><FaUserCheck className='w-20 h-20 p-4 text-cyan-700 hover:text-white'/></div>
            <h1 className='text-3xl font-bold'>15</h1>
            <h1 className='text-lg text-gray-400'>Enrolled Course</h1>
         </div>
         <div className='shadow-xl flex flex-col items-center p-6 space-y-2'>
          <div className='rounded-full bg-blue-100 hover:bg-cyan-700'><FaBookReader className='w-20 h-20 p-4 text-cyan-700 hover:text-white'/></div>
            <h1 className='text-3xl font-bold'>11</h1>
            <h1 className='text-lg text-gray-400'>Active Course</h1>
         </div>
         <div className='shadow-xl flex flex-col items-center p-6 space-y-2'>
            <div className='rounded-full bg-blue-100 hover:bg-cyan-700'><RiCheckboxCircleFill className='w-20 h-20 p-4 text-cyan-700 hover:text-white'/></div>
            <h1 className='text-3xl font-bold'>11</h1>
            <h1 className='text-lg text-gray-400'>Completed Course</h1>
         </div>
         <div></div>
         <div></div>
         <div></div>
      </div>
    </div>
  )
}

export default Dashboard