import React, { useContext } from 'react';
import { FaTrashAlt ,FaCcAmazonPay} from 'react-icons/fa';
import { useQuery } from 'react-query';
import { AuthContext } from '../../../../Components/Provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';

const UserDashBookmark = () => {
  const { User } = useContext(AuthContext);
  const navigat = useNavigate();

  const { data: carts, isLoading, isError,refetch } = useQuery('bookmarks', async () => {
    const response = await fetch(`https://ass-12-server-mu.vercel.app/mybookmark?email=${User?.email}`);
    if (!response.ok) {
      throw new Error('Failed to fetch bookmarks');
    }
    return response.json();
  });

  const handleDelete = (id) => {
    fetch(`https://ass-12-server-mu.vercel.app/mybookmarkDelete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();

        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Bookmark Removed!!',
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const handePayment = (id) => {
    navigat(`/dashboard/payment/${id}`);
  };

  return (
    <div>
      <div className="w-full md:w-5/5 lg:w-4/4 bg-white rounded-lg shadow-lg overflow-hidden">
        <SectionTitle title={"BOOKMARKED CLASSES!"}></SectionTitle>
     
       
        {  (carts?.length === 0 ? (
          <div className="flex flex-col justify-center min-h-[700px] items-center p-8">
            <img src={"https://i.ibb.co/wJVvS1F/603828-612x612.jpg"} alt="Empty Cart" className="w-[500px] mb-4" />
            <p className="text-black text-3xl my-10">Nothing here. Add some?</p>
            <Link to={"/classes"}><button className='btn btn-warning text-white'> See Classes </button></Link>
          </div>
        ) : (
          <table className="table w-full">
            <thead>
              <tr className="text-white bg-purple-400">
                <th></th>
                <th></th>
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Price</th>
                <th>Available Seats</th>
                <th>Delete</th>
                <th>Enroll Now</th>
              </tr>
            </thead>
            <tbody>
              {carts?.map((cart, index) => (
                <tr key={cart._id}>
                  <th>{index + 1}</th>
                  <td>
                    <img src={cart.classImage} className="w-24 rounded-xl" alt="" />
                  </td>
                  <td>{cart.className}</td>
                  <td>{cart.insName}</td>
                  <td>{cart.price} $</td>
                  <td className="ps-10">{cart.Availableseats}</td>
                  <td>
                    <button
                      className="btn btn-warning text-black btn-outline btn-sm  font-bold hover:bg-warning transition-all"
                      onClick={() => handleDelete(cart?._id)}
                    >
                     <FaTrashAlt />
                     
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary btn-outline btn-sm text-white font-bold hover:bg-primary transition-all"
                      onClick={() => handePayment(cart?._id)}
                    >
                   <FaCcAmazonPay />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ))}
      </div>
    </div>
  );
};

export default UserDashBookmark;
