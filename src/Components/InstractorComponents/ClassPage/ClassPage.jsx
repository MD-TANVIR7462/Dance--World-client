import React, { useEffect, useState } from 'react';
import useinsClass from '../../../../Hooks/useinsClass';
import PopularCard from '../../PopulerClass/PopularCard';

const ClassPage = () => {
   const [aproveClasses,setAprove] = useState()
   const { classes, refetch } = useinsClass([])
useEffect(()=>{
   const newdata =classes?.filter(singleData => singleData.status === "Approve")
setAprove(newdata)
},[classes])
   return (
     <div className='bg-gray-100'>
       <div className=' mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
         {
            aproveClasses?.map(Singleclass=><PopularCard Singleclass={Singleclass} key={Singleclass._id}></PopularCard>)
         }
      </div>
     </div>
   );
};

export default ClassPage;