import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PiShareFat } from "react-icons/pi";
import { FaHeart, FaStar } from 'react-icons/fa';
import { getCourseById } from '../../services/api';
import { Tab, TabList, TabPanel, Tabs } from '../../utils/Tabs';
import { RiCalendar2Line } from "react-icons/ri";
import { FiVideo } from "react-icons/fi";
import { WiTime4 } from "react-icons/wi";
import { LuClipboardCheck } from "react-icons/lu";
import { TbUserScreen } from "react-icons/tb";
import { PiCertificate } from "react-icons/pi";
import { FaRegHandPointRight } from "react-icons/fa";
const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const data = await getCourseById(id);
        setCourse(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p className="mx-20 my-10">Loading...</p>;
  if (!course) return <p className="mx-20 my-10">No course found.</p>;

  const {
    title,
    description,
    imageUrl,
    rating = 4.2,   // default if no rating
    reviewCount = 18 // default if no review count
  } = course;

  return (
    <div className='mx-20 my-10 font-fredoka'>
     

      <div className='grid grid-cols-3 gap-5'>
        {/* Image Section */}
        <div className='col-span-2'>
          <img src={imageUrl} alt={title} className='h-44 w-full rounded-md' />

          {/* Share, Wishlist, Reviews */}
          <div className="flex items-center justify-start gap-6 mt-4">
            
            {/* Share */}
            <button
              aria-label="Share this course"
              className="flex items-center gap-2 px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-md transition"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: title,
                    text: description,
                    url: window.location.href, // current page link
                  }).catch(err => console.error('Share failed:', err));
                } else {
                  navigator.clipboard.writeText(window.location.href);
                  alert('Link copied to clipboard!');
                }
              }}
            >
              <PiShareFat />
              <span>Share</span>
            </button>

            {/* Wishlist */}
            <button
              aria-label="Add to wishlist"
              className="flex items-center gap-2 px-4 py-2 border border-cyan-600 text-cyan-600 rounded-md hover:bg-cyan-600 hover:text-white transition"
              onClick={() => alert('Added to wishlist!')}
            >
              <FaHeart />
              <span>Wishlist</span>
            </button>

            {/* Reviews */}
            <div className="flex items-center gap-1 text-yellow-400 font-semibold select-none">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}
                />
              ))}
              <span className="text-gray-700 ml-2 text-sm">
                ({reviewCount} reviews)
              </span>
            </div>
          </div>
          <div>
             <h1 className="text-2xl font-medium my-5">{title}</h1>
          </div>
          <div>
         <Tabs defaultIndex={0}>
      <TabList>
        <Tab index={0} >Course Info</Tab>
        <Tab index={1}>Reviews</Tab>
      </TabList>

      <TabPanel index={0}>
        <div className="mt-8 space-y-6">
          <div>
            <h2 className='text-cyan-600 text-2xl font-medium'>WHAT YOU WILL GAIN</h2>
            <ol className='ml-4 mt-4 space-y-2 '>
              <li className='font-semibold'><span className='text-cyan-600 font-extrabold mr-2'>&gt;&gt;</span>সালাফদের আকিদাহ সম্পর্কিত জ্ঞানলাভ</li>
              <li className='font-semibold'><span className='text-cyan-600 font-extrabold mr-2'>&gt;&gt;</span>দ্বীনের নিত্যপ্রয়োজনীয় মৌলিক ও গভীর জ্ঞানার্জন</li>
              <li className='font-semibold'><span className='text-cyan-600 font-extrabold mr-2'>&gt;&gt;</span>পবিত্রতা, সালাত, সিয়াম, যাকাত ও হজ্জের সঠিক পদ্ধতি জানা</li>
              <li className='font-semibold'><span className='text-cyan-600 font-extrabold mr-2'>&gt;&gt;</span>আরবি ভাষায় দক্ষতার ফলে মৌলিক উৎস থেকে উপকার লাভ</li>
              <li className='font-semibold'><span className='text-cyan-600 font-extrabold mr-2'>&gt;&gt;</span>নিজেকে একজন প্রকৃত এবং প্র্যাক্টিসিং মুসলিম হিসেবে প্রতিষ্ঠিত করা</li>
              <li className='font-semibold'><span className='text-cyan-600 font-extrabold mr-2'>&gt;&gt;</span>বিশুদ্ধ কুরআন তিলাওয়াত, অনুধাবন ও ব্যাখ্যা জেনে নিজেকে শাণিত করা</li>
              <li className='font-semibold'><span className='text-cyan-600 font-extrabold mr-2'>&gt;&gt;</span>দ্বীনের মৌলিক ও গভীর জ্ঞানার্জন করে দা’ঈ হিসেবে ক্যারিয়ার গড়ার সুযোগ</li>
              <li className='font-semibold'><span className='text-cyan-600 font-extrabold mr-2 '>&gt;&gt;</span>দৈনন্দিন কথোপকথনসহ আরবি ভাষায় লিখন-পাঠ ও শ্রবণের যোগ্যতা অর্জন</li>
              <li className='font-semibold'><span className='text-cyan-600 font-extrabold mr-2'>&gt;&gt;</span>হাদিস মুখস্থকরণ, অনুধাবন ও পালনের মাধ্যমে সুন্নাহ ভিত্তিক জীবনযাপনের পাঠগ্রহণ</li>
              <li className='font-semibold'><span className='text-cyan-600 font-extrabold mr-2'>&gt;&gt;</span>সিরাহ ও ইসলামি ইতিহাস জেনে যুগের সকল ফিতনা মুকাবেলায় নিজেকে প্রস্তুত রাখা</li>
            </ol>
          </div>
          <div>
            <h2 className='text-cyan-600 text-2xl font-medium mb-2'>Materials Included</h2>
            <div className='grid grid-cols-2 text-lg mt-4 '>
               <div className='flex items-center gap-2'> <RiCalendar2Line className='text-cyan-600' />
                Course duration: 24 days
               </div>
               <div className='flex items-center gap-2'> <FiVideo className='text-cyan-600'/>
                Live classes and recorded
               </div>
               <div className='flex items-center gap-2'> <WiTime4 className='text-cyan-600'/>
                Class duration: 90 minutes
               </div>
               <div className='flex items-center gap-2'> <LuClipboardCheck className='text-cyan-600'/>
                Exam: Final
               </div>
               <div className='flex items-center gap-2'> <TbUserScreen className='text-cyan-600'/>
                Weekly class days: 6 days
               </div>
               <div className='flex items-center gap-2'> <PiCertificate className='text-cyan-600'/>
                Issuance of certificates
               </div>
            </div>

          </div>
          <div>
            <h2 className='text-cyan-600 text-2xl font-medium'>Course Fee</h2>
            <div className='flex items-center gap-2'>
             <FaRegHandPointRight className='text-cyan-600'/>Course Fee: {course?.fee} BDT
            </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel index={1}>
        <h2>Dashboard content goes here.</h2>
      </TabPanel>
    </Tabs>
          </div>
        </div>

        {/* Placeholder for video */}
        <div>
          <div>
            <img src="" alt="Video Link" />
          </div>
          <div className='bg-cyan-100 flex flex-col items-center p-6 gap-6'>
            <h2 className='text-3xl font-medium text-cyan-400'>Click TO Enroll</h2>
            <Link to={`/courses/${course.id}/enroll`} className='bg-cyan-600 text-white py-2 text-center w-full rounded-sm'>Enroll Now</Link>
          </div> 
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
