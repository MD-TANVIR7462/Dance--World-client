import React from 'react';

const PopulerInstractor = ({instructor}) => {
  const {email,role  } = instructor
   return (
      <div className='mb-5 md:mb-0'>
         <div
          
          className="relative bg-white rounded-md overflow-hidden  cursor-pointer hover:shadow-lg transition-shadow duration-300"
        >
          <div className="group">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full h-auto object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div className="p-4 absolute bottom-0 left-0 py-10 right-0 bg-white bg-opacity-90 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 flex justify-between items-center">
            <p>
            <h3 className="text-xl font-bold">{instructor.name}</h3>
              <p className="text-md text-gray-900 font-semibold"> <span className='font-bold'> Contact Me :</span>  {email}</p>
              <p className="text-md font-semibold text-gray-900"><span className='font-bold'> Position : </span> {role}</p>
            </p>
            <p>
            <button className='btn  text-white btn-warning'>classes</button>
            </p>
             
            </div>
           
          </div>
          
        </div>
      </div>
   );
};

export default PopulerInstractor;



