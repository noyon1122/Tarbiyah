import React, { useEffect, useState } from 'react'
import  { getTeachers } from '../../services/api';
import TeacherCard from './TeacherCard';

const TeacherList = () => {
    const [teachers,setTeachers]=useState([]);

    useEffect(()=>{
        const getAllTeachers=async()=>{
         try {
            const response=await getTeachers();
            const allTeachers=response.userList;
            setTeachers(allTeachers);
         } catch (error) {
            console.error('Error fetching teachers:', error.message);
         }
        }
        getAllTeachers();
    },[])

  return (
    <div className='mx-20 my-10'>
        <div className='text-center'>
            <div className='max-w-sm mx-auto flex flex-row items-center text-cyan-600'>
            <div className="flex-grow border-t-2 border-cyan-600 w-2"></div>
            <span className="mx-4 text-lg font-semibold">Our Teachers</span>
            <div className="flex-grow border-t-2 border-cyan-600 w-7"></div>
            </div>
            <div>
                <h1 className='text-3xl my-3'>Meet Our Teachers</h1>
            </div>

        </div>

        <div className='grid grid-cols-3 gap-4'>
            {
                teachers.map(teacher => (<TeacherCard key={teacher.id} teacher={teacher}></TeacherCard>))
            }
        </div>
    </div>
  )
}

export default TeacherList