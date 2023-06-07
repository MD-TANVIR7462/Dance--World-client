
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BannerImage = ({ imageUrl, title, subtitle }) => { 
useEffect(() => {
   AOS.init({ duration: 800, once: true });
}, []);

return (
   <div className="hero min-h-[720px] bg-base-100">
      <div className="hero-content flex-col lg:flex-row-reverse">
         <motion.img
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            src={imageUrl}
            alt="Toy Banner"
            className="max-w-2xl transition-transform hover:scale-105 rounded-lg shadow-3xl hero-overlay opacity-95"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
         />
         <div className="flex flex-col justify-center">
            <motion.h1
               className="text-5xl font-bold"
               data-aos="fade-right"
               data-aos-easing="ease-in-out"
               data-aos-duration="1000"
            >
              {title}
            </motion.h1>
            <motion.p
               className="py-6"
               data-aos="fade-right"
               data-aos-easing="ease-in-out"
               data-aos-duration="1000"
            >
               {subtitle}
            </motion.p>
            <Link to="/" className="inline-block">
               <motion.button
                  className="inline-flex items-center justify-center px-6 py-3 mt-4 text-lg font-medium transition-transform duration-300 bg-blue-500 rounded-full text-white hover:scale-105 hover:bg-indigo-500"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="1000"
               >
                  Enroll Now
                  <motion.svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5 ml-2"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                     whileHover={{ scale: 1.1 }}
                  >
                     <motion.path
                        fillRule="evenodd"
                        d="M8 4a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-2 0V5H9a1 1 0 01-1-1zm4 1h2a1 1 0 011 1v10a1 1 0 01-1 1h-2a1 1 0 01-1-1V6a1 1 0 011-1zm-7 7H5a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1zm10 0h-2a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1z"
                        clipRule="evenodd"
                     />
                  </motion.svg>
               </motion.button>
            </Link>
         </div>
      </div>
   </div>
);
   };



export default BannerImage;
