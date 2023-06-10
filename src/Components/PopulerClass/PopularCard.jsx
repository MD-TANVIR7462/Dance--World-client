import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';




const PopularCard = ({ Singleclass }) => {


  const { User } = useContext(AuthContext);
  const navigate = useNavigate();
  const { className, students, image, price, instructor,  Availableseats } = Singleclass;

  const handleSelect = (classes) => {
    
    const { Availableseats, className, email, image, instructor, price, students, _id } = classes;

    if (User) {
      const myCartdata = {
        Availableseats,
        className,
        instructorEmail: email,
        insName: instructor,
        oldId: _id,
        price,
        students,
        classImage: image,
        userName: User.displayName,
        userEmail: User.email,
        userPhoto: User.photoURL
      };

      fetch('http://localhost:5000/mybookmark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(myCartdata)
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.statusbar === 'Already Bookmarked') {
          
            toast.warn('🦄 Wow so easy!', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
              });
          
        
          
          }
        });
    } else {
      navigate('/login');
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-700 hover:scale-95">
      <img
        src={image}
        alt="class"
        className="w-full h-48 object-cover transition duration-700 ease-in-out transform hover:scale-110"
      />
      <div className="p-4">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-yellow-500">{className}</h2>
          <p className="text-gray-600 mb-2">
            <strong>Instructor:</strong> {instructor}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Price:</strong> ${price}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Available Seats:</strong> {Availableseats}
          </p>
          <p className="text-gray-600 mb-2">
            <strong>Students:</strong> {students}
          </p>
        </div>
        <div className="flex justify-center">
          <button
            className="btn btn-warning btn-outline"
            onClick={() => handleSelect(Singleclass)}
         
          >
            Book Mark
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;


