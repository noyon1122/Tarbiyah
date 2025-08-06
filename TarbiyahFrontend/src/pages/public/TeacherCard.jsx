import React from 'react';

const TeacherCard = ({ teacher, onClick }) => {
  const {
    firstName,
    lastName,
    imageUrl,
    email,
    mobile,
    address,
  } = teacher;
console.log(teacher)
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-gray-50 shadow-md hover:shadow-xl rounded-xl p-6 max-w-sm transition-transform hover:scale-105 border border-cyan-200"
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={imageUrl}
          alt={`${firstName} ${lastName}`}
          className="w-24 h-24 rounded-full object-cover border-4 border-cyan-600"
        />
        <h2 className="mt-4 text-xl font-bold text-cyan-700">
          {firstName} {lastName}
        </h2>
        <p className="text-sm text-gray-600">{email}</p>
        <p className="text-sm text-gray-600">{mobile}</p>
        <p className="text-sm text-gray-500">{address}</p>
        <div className="mt-3">
          <p className="text-sm font-medium text-cyan-800">
            Subject: Tajweed & Qur’an Recitation
          </p>
          <p className="text-sm text-gray-700 mt-1">Specializes in teaching Qur’an with proper Tajweed and Makharij, with over 8 years of experience.</p>
        </div>
      </div>
    </div>
  );
};

export default TeacherCard;
