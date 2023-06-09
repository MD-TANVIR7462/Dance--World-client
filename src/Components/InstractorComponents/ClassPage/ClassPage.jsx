import React from 'react';
import useinsClass from '../../../../Hooks/useinsClass';
import PopularCard from '../../PopulerClass/PopularCard';

const ClassPage = () => {
   const { classes, refetch } = useinsClass([])

   return (
     <div className='bg-gray-100'>
       <div className=' mx-auto w-11/12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
         {
            classes?.map(Singleclass=><PopularCard Singleclass={Singleclass} key={Singleclass._id}></PopularCard>)
         }
      </div>
     </div>
   );
};

export default ClassPage;