import React, { useEffect, useState } from 'react'
import { getEnrolledCourses } from '../../services/api';
import CourseCard from './CourseCard';

const CourseEnroll = () => {
   const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

useEffect(() => {
    const fetchEnrolled = async () => {
      try {
        const data = await getEnrolledCourses();
        console.log("data form course ",data);
        setCourses(data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch enrolled courses');
      } finally {
        setLoading(false);
      }
    };

    fetchEnrolled();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="mx-20 my-10">
      <h1 className="text-2xl font-bold mb-6">My Enrolled Courses</h1>
      {courses.length === 0 ? (
        <p>You have not enrolled in any courses yet.</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};



export default CourseEnroll