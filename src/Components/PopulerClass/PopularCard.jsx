import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const PopularCard = ({ Singleclass }) => {
  const { User } = useContext(AuthContext);
  const navigate = useNavigate();
  const { className, students, image, price, instructor, Availableseats } = Singleclass;
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    const bookmarkedClasses = JSON.parse(localStorage.getItem('bookmarkedClasses')) || [];
    const isClassBookmarked = bookmarkedClasses.some((bookmark) => bookmark._id === Singleclass._id);
    setIsBookmarked(isClassBookmarked);
  }, [Singleclass._id]);

  const handleSelect = (classes) => {
    const { Availableseats, className, email, image, instructor, price, students, _id } = classes;

    if (User) {
      setIsButtonDisabled(true); // Disable the button
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
            setIsBookmarked(true);
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
            disabled={isButtonDisabled || isBookmarked}
          >
            {isBookmarked ? 'Bookmarked' : 'Bookmark'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
