import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UseRole from '../../../Hooks/UseRole';
import Swal from 'sweetalert2';




const PopularCard = ({ Singleclass }) => {


  const { User } = useContext(AuthContext);
  const { findUser } = UseRole()
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

      fetch('https://ass-12-server-mu.vercel.app/mybookmark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(myCartdata)
      })
        .then((res) => res.json())
        .then(data => {
         
          Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Bookmark Added!',
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              popup: 'bg-white border-4 border-gray-300 rounded-lg',
              title: 'text-black text-lg font-bold text-center mb-2'
            },
          });
          
          
      
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
  <div className={`p-4 ${Availableseats === 0 ? 'bg-red-500' : ''}`}>
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
        disabled={findUser?.role === "admin" || findUser?.role === "instructor" || Availableseats === 0}
      >
        Book Mark
      </button>
    </div>
  </div>
</div>




  );
};

export default PopularCard;


