import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import BennerImage from './BennerImage/BennerImage';




const Benner = () => {

   // const imageUrl = "https://i.ibb.co/1qbXWYH/the-dance-academy-lehi-empowering-young-dancers-leaping-1800-sm.jpg";



   return (
      <>
         <div className='mb-8'>
            <Swiper
               spaceBetween={0}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               <SwiperSlide>
                 <BennerImage 
                  imageUrl = {"https://i.ibb.co/kyRzQy8/240-F-257036699-P75-JW1i77y6uk-Iof-LXs-Q6-Zsg-F7-Hh2-Lg-I.jpg"}
                  title={'We Help You Achieve'}
                  subtitle={'You Dreams'}
                 
                 >



                 </BennerImage>
               </SwiperSlide>

               <SwiperSlide>
                 
               </SwiperSlide>

               <SwiperSlide>
               
               </SwiperSlide>

               <SwiperSlide>
                
               </SwiperSlide>
              



            </Swiper>
         </div>
      </>
   );
};

export default Benner;