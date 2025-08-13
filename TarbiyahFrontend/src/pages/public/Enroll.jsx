import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Enroll = () => {
  const navigate=useNavigate()

  const handleSubmit =(e)=>{
    
     e.preventDefault();
    try {
        alert("Payment succesfull")
        navigate('/student/course-enroll')
    } catch (error) {
        
    }
}
  return (
    <div className='mx-20 my-10 font-fredoka'>
     
<form className="space-y-6" onSubmit={handleSubmit}> 
      <div className='grid grid-cols-3 gap-5'>
      
        {/*Student information*/}
        <div className='col-span-2 shadow-xl'>
          
          <div className='p-5'>
           <table className="w-full border-collapse">
      <tbody>
        <tr>
          <td className="text-lg font-semibold">Billing Details</td>
        </tr>

        {/* Full Name */}
        <tr>
          <td>
            <div className="relative mt-6">
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 pt-5 pb-1 text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              />
              <label
                htmlFor="fullName"
                className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Full Name
              </label>
            </div>
          </td>
        </tr>

        {/* Email */}
        <tr>
          <td>
            <div className="relative mt-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 pt-5 pb-1 text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              />
              <label
                htmlFor="email"
                className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Email Address
              </label>
            </div>
          </td>
        </tr>

        {/* Mobile */}
        <tr>
          <td>
            <div className="relative mt-6">
              <input
                type="text"
                name="mobile"
                id="mobile"
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 pt-5 pb-1 text-gray-900 placeholder-transparent focus:border-blue-500 focus:outline-none"
              />
              <label
                htmlFor="mobile"
                className="absolute left-0 top-1 text-gray-500 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-blue-500"
              >
                Mobile
              </label>
            </div>
          </td>
        </tr>

        {/* Gender */}
        <tr>
          <td>
            <div className="relative mt-6">
              <select
                id="gender"
                name="gender"
                defaultValue=""
                className="peer w-full border-b-2 border-gray-300 bg-transparent px-0 pt-5 pb-1 text-gray-900 focus:border-blue-500 focus:outline-none"
              >
                <option>Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
         
            </div>
          </td>
        </tr>

        {/* Terms */}
        <tr>
          <td>
            <label className="flex items-center gap-2 mt-6">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded focus:ring-blue-500"
              />
              Agree To Terms & Conditions
            </label>
          </td>
        </tr>
      </tbody>
    </table>
          </div>

        </div>

        {/* Payment information */}
        <div>
          <div className='bg-cyan-100 flex flex-col items-center p-6 gap-6'>
            <div></div>
            <button type="submit"  className='bg-cyan-600 text-white py-2 text-center w-full rounded-sm'>Pay Now</button>
          </div> 
        </div>
     
      </div>
       </form> 
    </div>
  )
}

export default Enroll