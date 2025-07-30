import React from 'react'
import { GiCheckMark } from "react-icons/gi";
import header from '../../assets/images/header.png'
import certificate from '../../assets/images/certificate.png'
import food from '../../assets/images/food.png'
import instructor from '../../assets/images/instructor.png'
import play from '../../assets/images/play.png'
import study from '../../assets/images/study.png'
import support from '../../assets/images/support.png'
import about from '../../assets/images/about.png'
import writting from '../../assets/images/writting.png'
import TeacherList from './TeacherList';
import PopularCourse from './PopularCourse';
const Home = () => {

  const commonBoxClass = "bg-slate-100 font-fredoka flex flex-col items-center text-center justify-center p-6 m-2 rounded shadow";
  return (
    <div>
      {/* Header section */}
      <div className='bg-cyan-600 font-fredoka text-white flex justify-between px-14 py-12'>
        <section className='w-1/2'>
       <div className='mt-24 flex flex-col gap-2'>
        <h2 className='text-3xl'>Islamic Education Center</h2>
        <h1 className='text-7xl '>New Approach to Smart Education</h1>
        <h1 className='mt-3'>We believe in nurturing curiosity, creativity, and character by combining faith-based education with innovative methods.
            Join us as we build a brighter future rooted in tradition and guided by technology.</h1>
        
       </div>
      
      </section>
      <section className='w-1/2'>
        <div className=''>
          <img src={header} alt="" />
        </div>
      </section>
      </div>
     {/* Facilities section */}
      <div className='grid grid-cols-3 m-16 gap-4'>
       <div className={commonBoxClass}>
      <img className="w-16 h-16 mb-3 mx-auto" src={play} alt="Play Ground" />
      <h1 className="text-2xl font-medium mb-2">Play Ground</h1>
      <p>
        Our playground blends fun with learning — helping children build confidence, coordination, and friendships.
      </p>
    </div>

    <div className={commonBoxClass}>
      <img className="w-14 h-14 mb-3 mx-auto" src={study} alt="Study Material" />
      <h1 className="text-2xl font-medium mb-2">Study Material</h1>
      <p>
        Courses have been carefully designed to take students to a level of mastery delivered through engaging video modules, PDFs, short quizzes and final exams.
      </p>
    </div>

    <div className={commonBoxClass}>
      <img className="w-16 h-16 mb-3 mx-auto" src={food} alt="Healthy Food" />
      <h1 className="text-2xl font-medium mb-2">Healthy Food</h1>
      <p>
        Discover how smart eating habits can boost energy, improve focus, and support lifelong wellness.
      </p>
    </div>

    <div className={commonBoxClass}>
      <img className="w-16 h-16 mb-3 mx-auto" src={support} alt="Online Support" />
      <h1 className="text-2xl font-medium mb-2">Online Support</h1>
      <p>
        24/7 online access to the course material including video recordings, presentations, course notes and assessments.
      </p>
    </div>

    <div className={commonBoxClass}>
      <img className="w-16 h-16 mb-3 mx-auto" src={instructor} alt="Certified Instructor" />
      <h1 className="text-2xl font-medium mb-2">Certified Instructor</h1>
      <p>
        We have qualified and experienced Shari’ah scholars graduated from world renowned universities & certified by the experts in their respective fields.
      </p>
    </div>

    <div className={commonBoxClass}>
      <img className="w-16 h-16 mb-3 mx-auto" src={certificate} alt="Certificate" />
      <h1 className="text-2xl font-medium mb-2">Certificate</h1>
      <p>
        Certificates will be awarded upon successful completion of the courses to recognise your achievement.
      </p>
    </div>
      </div>
     {/* About us Section */}

     <div className='flex items-center justify-center m-16 gap-10 w-11/12'>
      <div className='w-full'>
        <img src={about} alt="" className='ml-2'/>
      </div>
      <div className=' space-y-4'>
       <div className='space-y-2'>
         <h1 className='text-3xl text-cyan-600 font-semibold'> Learn About Tarbiyah </h1>
       
        <h1>Tarbiyah Online has been working tirelessly to inculcate impeccable Islamic character, humane values, patriotism, and age-appropriate academic skills in its students from the primary level through a holistic approach. In order to achieve this goal, from the beginning, lessons are given in the light of the curriculum made by combining Quranic education, worldly education, and religious education in each class.</h1>
       </div>
       <div className='flex gap-6'>
          <img src={writting} alt="" className='w-32 max-h-28 '/>
          <div className=''>
            <h1 className='border-t border-b py-1 flex items-center gap-2'><GiCheckMark  className='text-cyan-600'/> Tarbiyah shapes hearts before minds.</h1>
            <h1 className='border-b py-1 flex items-center gap-2' ><GiCheckMark className='text-cyan-600'/> Faith. Knowledge. Character.</h1>
            <h1 className='border-b py-1 flex items-center gap-2'><GiCheckMark className='text-cyan-600'/> Raising leaders through values.</h1>
          </div>
        </div>
      </div>
     </div>

     {/* Popular Classes */}
     <PopularCourse></PopularCourse>
     {/* All teachers */}
     <TeacherList></TeacherList>
    </div>
  )
}

export default Home