import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Tilt from "react-parallax-tilt";

const Newsection = () => {
   useEffect(() => {
      AOS.init();
   }, []);
   return (
      <section className=''>
         <div className='grid grid-cols-1 md:grid-cols-2 mx-auto'>
      
            <img className='w-full ' src="https://i.ibb.co/zQRwMvq/240-F-303120151-Jkf7xq-HJFy2-Mdt32-Alcy-Z2ezvs-GSTLnd.jpg" alt="" data-aos="zoom-in"
               data-aos-duration="2000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true"
            />
            <div className='py-20  flex flex-col  justify-center items-center bg-[#f4f4f4]' data-aos="zoom-in"
               data-aos-duration="2000"
               data-aos-easing="ease-in-out"
               data-aos-mirror="true">

               <p className='text-md font-bold text-slate-500'>It's</p>
                <i className='text-red-600 text-4xl md:text-6xl pb-2 md:pb-4'> <Tilt>DANCE WORLD</Tilt></i>
               <p className='text-lg font-semibold text-slate-500'>Fell The Art Of <span className='text-red-600 pl-1 font-bold text-xl'>Dance</span></p>

               <span className='mt-8'>
                  <button className="btn w-32 text-sm md:text-md md:w-48 text-center btn-outline border-0 border-b-4 md:mt-4">Enrol  Now</button>
               </span>
            </div>
         </div>
      </section>
   );
};


export default Newsection;