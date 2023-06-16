import React from 'react';
import useUsers from '../../../Hooks/useUsers';

import PopulerInstractor from './PopulerInstractor';
import SectionTitle from '../SectionTitle/SectionTitle';


const InstractorMain = () => {
  const { users, refetch } = useUsers();
console.log(users);
  const instructors = users?.filter(user => user.role === "instructor").slice(0,6);

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto w-11/12">
    <SectionTitle title={"Top Instructors "}></SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {
       instructors.map(instructor=><PopulerInstractor instructor={instructor} key={instructor._id}></PopulerInstractor>)
          }
        </div>
      </div>
    </section>
   
  );
};

export default InstractorMain;
