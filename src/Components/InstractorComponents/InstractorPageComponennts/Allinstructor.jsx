import React from 'react';
import { Parallax } from 'react-parallax';
import useUsers from '../../../../Hooks/useUsers';
import PopulerInstractor from '../../PopulerInstractors/PopulerInstractor';

const Allinstructor = () => {
  const { users, refetch } = useUsers([]);
  const instructors = users?.filter(user => user?.role === "instructor");

  return (
    <div className="pb-12 bg-gray-100">
      <div className="min-h-[800px] mx-auto">
        <Parallax bgImage="https://i.ibb.co/yF24jLv/group-contemporary-teens-pants-tanktops-repeating-after-dance-leader-274679-34618.jpg" strength={500}>
          <div className="hero min-h-[700px]">
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-md mx-auto">
                <h1 className="mb-5 text-5xl font-bold">Discover Skilled Instructors</h1>
                <p className="mb-8 text-lg">
                  Unleash your potential with our diverse range of talented instructors. From art and music to fitness and programming, find the perfect mentor to guide you on your learning journey.
                </p>
                <button className="btn btn-warning px-8 py-3 rounded-full font-semibold hover:bg-yellow-500">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </Parallax>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Instructors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        
          {instructors && instructors.map(instructor => (
           
           <PopulerInstractor key={instructor._id} instructor={instructor}></PopulerInstractor>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Allinstructor;
