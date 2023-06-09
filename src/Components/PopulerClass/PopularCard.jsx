const PopularCard = ({ Singleclass ,handleSelect}) => {
  const { className, students, image, price, instructor,  Availableseats } = Singleclass;


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


