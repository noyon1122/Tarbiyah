import React from 'react'
import useAuth from '../../hooks/useAuth';

const StudentProfile = () => {
  const {user}=useAuth();
    
  return (
    <div className=''>
        <div>
           <h1 className='text-2xl font-medium'>My Profile</h1>
        </div>
        <div className='mt-4'>
 <table className="w-full border text-sm">
  <thead className="bg-gray-100 text-left">
    <tr>
      <th className="w-1/4 px-4 py-3 border-r">Field</th>
      <th className="w-3/4 px-4 py-3">Details</th>
    </tr>
  </thead>

  <tbody>
    <tr className="border-t ">
      <td className="px-4 py-3 font-medium text-gray-600 border-r">First Name</td>
      <td className="px-4 py-3">{user?.firstName}</td>
    </tr>
    <tr className="border-t">
      <td className="px-4 py-3 font-medium text-gray-600 border-r">Last Name</td>
      <td className="px-4 py-3">{user?.lastName}</td>
    </tr>
    <tr className="border-t">
      <td className="px-4 py-3 font-medium text-gray-600 border-r">Username</td>
      <td className="px-4 py-3">{user?.username}</td>
    </tr>
    <tr className="border-t">
      <td className="px-4 py-3 font-medium text-gray-600 border-r">Email</td>
      <td className="px-4 py-3">{user?.email}</td>
    </tr>
    <tr className="border-t">
      <td className="px-4 py-3 font-medium text-gray-600 border-r">Date of Birth</td>
      <td className="px-4 py-3">{user?.dob}</td>
    </tr>
    <tr className="border-t">
      <td className="px-4 py-3 font-medium text-gray-600 border-r">Phone Number</td>
      <td className="px-4 py-3">{user?.mobile}</td>
    </tr>
    <tr className="border-t">
      <td className="px-4 py-3 font-medium text-gray-600 border-r">Address</td>
      <td className="px-4 py-3">{user?.address}</td>
    </tr>
  </tbody>
</table>

        </div>
    </div>
  )
}

export default StudentProfile