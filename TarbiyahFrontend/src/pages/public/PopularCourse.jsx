import React, { useEffect, useState } from 'react'
import { getPopularCourse } from '../../services/api'
import PopularCourseCard from './PopularCourseCard'

const PopularCourse = () => {
    const [popularCourse,setPopularCourse]=useState([])

     useEffect(()=>{
            const getAllPopularCourse=async()=>{
             try {
                const response=await getPopularCourse();
             
                setPopularCourse(response);
             } catch (error) {
                console.error('Error fetching teachers:', error.message);
             }
            }
            getAllPopularCourse();
        },[])
  return (
     <div className='mx-20 my-10'>
        <div className='text-center'>
            <div className='max-w-sm mx-auto flex flex-row items-center text-cyan-600'>
            <div className="flex-grow border-t-2 border-cyan-600 w-2"></div>
            <span className="mx-4 text-lg font-semibold">Our Popular Courses</span>
            <div className="flex-grow border-t-2 border-cyan-600 w-7"></div>
            </div>
            <div>
                <h1 className='text-3xl my-3'>Learn the Deen with Love and Light.</h1>
            </div>

        </div>

        <div className='grid grid-cols-4 gap-4'>
            {
                popularCourse.map(course => (<PopularCourseCard key={course.id} course={course}></PopularCourseCard>))
            }
        </div>
    </div>
  )
}

export default PopularCourse