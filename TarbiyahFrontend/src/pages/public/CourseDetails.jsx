import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PiShareFat } from "react-icons/pi";
import { FaHeart, FaStar } from 'react-icons/fa';
import { getCourseById } from '../../services/api';
import { Tab, TabList, TabPanel, Tabs } from '../../utils/Tabs';


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
    <div className='mx-20 my-10'>
     

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
             <h1 className="text-2xl font-bold my-5">{title}</h1>
          </div>
          <div>
         <Tabs defaultIndex={0}>
      <TabList>
        <Tab index={0}>Course Info</Tab>
        <Tab index={1}>Reviews</Tab>
      </TabList>

      <TabPanel index={0}>
        <h2>Profile content goes here.</h2>
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
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
