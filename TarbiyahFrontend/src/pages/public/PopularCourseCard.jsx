import React from 'react';
import { Link } from 'react-router-dom';

const PopularCourseCard = ({ course }) => {
  const {
    title,
    description,
    fee,
    startAge,
    endAge,
    startDate,
    imageUrl
  } = course;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm mx-auto">
      <img src={imageUrl} alt={title} className=" h-52 w-full" />

      <div className="p-6 text-center">
        <h2 className="text-xl font-bold text-cyan-900 mb-2">{title}</h2>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        <hr className="my-4" />

        {/* Table-like layout */}
        <div className="text-sm text-gray-700">
          <div className="grid grid-cols-2  border-gray-200">
            <div className="border-r border-gray-200 py-2 font-semibold text-right pr-3">Age of Students:</div>
            <div className="py-2 text-left pl-3">{startAge} - {endAge} Years</div>

            <div className="border-t border-r border-gray-200 py-2 font-semibold text-right pr-3">Total Seats:</div>
            <div className="border-t border-gray-200 py-2 text-left pl-3">40 Seats</div>

            <div className="border-t border-r border-gray-200 py-2 font-semibold text-right pr-3">Start Date:</div>
            <div className="border-t border-gray-200 py-2 text-left pl-3">{startDate}</div>

            <div className="border-t border-r border-gray-200 py-2 font-semibold text-right pr-3">Tuition Fee:</div>
            <div className="border-t border-gray-200 py-2 text-left pl-3">৳{fee} / Month</div>
          </div>
        </div>

        <Link to={`/courses/${course.id}`} className="mt-6 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-full transition">
          Join Now
        </Link>
      </div>
    </div>
  );
};

export default PopularCourseCard;
