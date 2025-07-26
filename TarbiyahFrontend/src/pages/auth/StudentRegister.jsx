import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../services/api';

const StudentRegister = () => {
    const navigate=useNavigate();
    const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    mobile: "",
    gender: "",
    dob: "",
    address: "",
    role: "STUDENT",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
     const updatedForm = { ...form, [name]: value };
    setForm(updatedForm);

  // Print all current form values to the console
  console.log("Form values:", updatedForm);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/student/dashboard")
      alert("Registered successfully!");
    } catch (err) {
      alert("Registration failed");
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-3xl">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up to Tarbiyah
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login">
            <span className="font-medium text-cyan-600 hover:text-cyan-500">Login</span>
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-3xl">
        <div className="bg-white py-8 px-6 shadow sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input type="text" name="firstName" required value={form.firstName} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 sm:text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input type="text" name="lastName" required value={form.lastName} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 sm:text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" name="username" required value={form.username} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 sm:text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required value={form.email} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 sm:text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" required value={form.password} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 sm:text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Mobile</label>
                <input type="text" name="mobile" value={form.mobile} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 sm:text-sm" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Gender</label>
                <select name="gender" value={form.gender} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 sm:text-sm">
                  <option value="">-- Select Gender --</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input type="date" name="dob" value={form.dob} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 sm:text-sm" />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Address</label>
                <textarea name="address" rows="2" value={form.address} onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 sm:text-sm" />
              </div>

            </div>

            <div className="mt-6">
              <button type="submit"
                className="w-full py-2 px-4 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-medium rounded-md focus:outline-none">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default StudentRegister