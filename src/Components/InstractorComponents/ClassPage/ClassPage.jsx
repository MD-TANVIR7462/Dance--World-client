import React, { useEffect, useState } from 'react';
import useinsClass from '../../../../Hooks/useinsClass';
import PopularCard from '../../PopulerClass/PopularCard';
import { Parallax } from 'react-parallax';
import SectionTitle from '../../SectionTitle/SectionTitle';

const ClassPage = () => {
   const [aproveClasses,setAprove] = useState()
   const { classes, refetch } = useinsClass([])
useEffect(()=>{
   const newdata =classes?.filter(singleData => singleData.status === "Approve")
setAprove(newdata)
},[classes])
   return (
     <div className='bg-gray-100'>


<div className="md:min-h-[800px] mx-auto ">
        <Parallax bgImage="https://i.ibb.co/d7R2Q5x/free-people-silhouettes-party-dance-vector.jpg" strength={500}>
          <div className="hero md:min-h-[1000px]">
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md mx-auto">
                <h1 className="mb-5 text-3xl font-bold">Explore the World of Dance</h1>
                <p className="mb-8 text-lg">
                "Welcome to our world of dance! At Dance World, we offer a diverse range of classes designed to ignite your passion for movement and inspire you to reach new heights.dedicated instructors are here to guide you on your dance journey.
                </p>
                <button className="btn btn-warning px-8 py-3 rounded-full font-semibold hover:bg-yellow-500">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </Parallax>
      </div>
<SectionTitle title={"Our Classes"}></SectionTitle>
       
       <div className='  mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
         {
            aproveClasses?.map(Singleclass=><PopularCard Singleclass={Singleclass} key={Singleclass._id}></PopularCard>)
         }
      </div>
     </div>
   );
};

export default ClassPage;