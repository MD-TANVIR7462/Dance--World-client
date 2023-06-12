import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import BennerImage from './BennerImage/BennerImage';




const Benner = () => {





   return (
      <>
         <div className=''>
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
                  imageUrl = {"https://i.ibb.co/2kBRgJG/dance-time-stylish-men-woman-dancing-hip-hop-bright-clothes-green-background-dance-hall-neon-light-s.jpg"}
                  title={' Dance Summer Camp'}
                  subtitle={'Join us for an unforgettable summer filled with rhythm, movement, and creativity.  Dance Summer Camp is the perfect opportunity for dancers of all levels to explore their passion and take their skills to new heights.'}
                 
                 >
                 </BennerImage>
               </SwiperSlide>

               <SwiperSlide>
                 <BennerImage 
                  imageUrl = {"https://i.ibb.co/NLcn9pY/stylish-young-man-women-MConverter-eu.jpg"}
                  title={' Hip-Hop Fusion'}
                  subtitle={'Get your groove on with our Hip-Hop Fusion classes. Learn the latest dance moves, embrace the urban vibes, and explore the dynamic fusion of hip-hop, street dance, and contemporary styles'}
                 
                 >
                 </BennerImage>
               </SwiperSlide>

               <SwiperSlide>
                 <BennerImage 
                  imageUrl = {"https://i.ibb.co/Nnt2yWL/girl-dancing-hip-hop-stylish-clothes-gradient-background-dance-hall-neon-light-155003-9258-MConverte.jpg"}
                  title={' Street Hip-Hop'}
                  subtitle={'Immerse yourself in the urban vibes of Street Hip-Hop. Learn the latest hip-hop dance moves, develop your freestyle skills, and express yourself with confidence and attitude in our dynamic Street Hip-Hop sessions.'}
                 
                 >
                 </BennerImage>
               </SwiperSlide>

            
               <SwiperSlide>
                 <BennerImage 
                  imageUrl = {"https://i.ibb.co/fqXKvKC/two-dancers-young-man-and-woman-dancing-hip-hop-i-2021-12-09-16-11-52-utc-scaled-e1655460990779-1-MC.jpg"}
                  title={' Sensual Latin Dance'}
                  subtitle={'Experience the passion and sensuality of Latin dance. Join our Sensual Latin Dance classes to explore captivating styles like salsa, bachata, and tango, as you move to the infectious rhythms and embrace the romance of Latin music'}
                 
                 >
                 </BennerImage>
               </SwiperSlide>


            </Swiper>
         </div>
      </>
   );
};

export default Benner;