import React from 'react';
import useUsers from '../../../Hooks/useUsers';

import PopulerInstractor from './PopulerInstractor';


const InstractorMain = () => {
  const { users, refetch } = useUsers([]);

  const instructors = users?.filter(user => user.role === "instructor").slice(0,6) || [];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto w-11/12">
        <h2 className="text-3xl font-bold text-center mb-16">Top Instructors </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {
       instructors.map(instructor=><PopulerInstractor instructor={instructor}></PopulerInstractor>)
          }
        </div>
      </div>
    </section>
  );
};

export default InstractorMain;
