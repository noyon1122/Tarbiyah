import React from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {
 const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold mb-6">Register As</h2>

      <div className="flex gap-6">
        <button
          onClick={() => navigate('/register/student')}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg shadow-md text-lg"
        >
          Student
        </button>

        <button
          onClick={() => navigate('/register/teacher')}
          className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg shadow-md text-lg"
        >
          Teacher
        </button>
      </div>
    </div>
  );
}

export default Register