import React, { useContext, useEffect, useState } from 'react';
import PopularCard from './PopularCard';
import SectionTitle from '../SectionTitle/SectionTitle';




const PopulerClass = () => {
  
  const [classes, setClass] = useState([])

  useEffect(() => {
    fetch('https://ass-12-server-mu.vercel.app/instractorclass')
      .then(res => res.json())
      .then(data => {
      
    
     const newdata =data.filter(singleData => singleData.status === "Approve")
   console.log(newdata)
   setClass(newdata.slice(0,6))
     
       

      })
  }, [])



  const sortedClasses = classes.sort((a, b) => b.students - a.students);


  return (


    <section className="bg-gray-100 pt-32 pb-32">
      <div className="container mx-auto w-11/12 ">
        <SectionTitle title ={"Popular Classes"}></SectionTitle>
        {/* <h2 className="text-3xl font-bold text-center mb-16 ">Popular Classes</h2> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10" >
          {
            sortedClasses.map(Singleclass => <PopularCard key={Singleclass._id} Singleclass={Singleclass} ></PopularCard>)
          }
  
        </div>
        
      </div>
     
    </section>

  );
};

export default PopulerClass;