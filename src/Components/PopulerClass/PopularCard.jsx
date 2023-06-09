// import React from 'react';

// const PopularCard = ({ Singleclass }) => {
//   const { className, students, image, price, instructor } = Singleclass;

//   return (
//     <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-500 hover:scale-105">
//       <img src={image} alt="class" className="w-full h-48 object-cover" />
//       <div className="p-4">
//         <h2 className="text-2xl font-bold mb-2">{className}</h2>
//         <p className="text-gray-600 mb-4">
//           <strong>Instructor:</strong> {instructor}
//         </p>
//         <p className="text-gray-600 mb-4">
//           <strong>Students:</strong> {students}
//         </p>
//         <p className="text-gray-600 mb-4">
//           <strong>Price:</strong> ${price}
//         </p>
//         <div className="flex justify-end">
//           {/* Add any additional actions or buttons here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PopularCard;
import React from 'react';

const PopularCard = ({ Singleclass }) => {
  const { className, students, image, price, instructor } = Singleclass;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-700 hover:scale-95">
      <img src={image} alt="class" className="  w-full h-48 object-cover transition duration-700 ease-in-out transform hover:scale-110 " />
      <div className="p-4">
        <h2 className="text-2xl font-bold mb-2 text-yellow-500" >{className}</h2>
        <p className="text-gray-600 mb-4">
          <strong>Instructor:</strong> {instructor}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Students:</strong> {students}
        </p>
        <p className="text-gray-600 mb-4">
          <strong>Price:</strong> ${price}
        </p>
        <div className="flex justify-end">
          {/* Add any additional actions or buttons here */}
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
