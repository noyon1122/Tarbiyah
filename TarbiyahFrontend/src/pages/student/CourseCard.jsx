import React from 'react'
import { Link } from 'react-router-dom';

const CourseCard = ({course}) => {
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
        <h2 className="text-lg font-bold text-cyan-900 mb-2">{title}</h2>
      </div>
    </div>
  );
};
export default CourseCard