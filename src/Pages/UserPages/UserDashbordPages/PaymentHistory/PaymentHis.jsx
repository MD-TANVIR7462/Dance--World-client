import React, { useContext } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle';
import { AuthContext } from '../../../../Components/Provider/AuthProvider';


const PaymentHis = () => {
  const { User } = useContext(AuthContext);
  const { data: carts, refetch ,} = useQuery('bookmarks', async () => {
    const response = await fetch(`https://ass-12-server-mu.vercel.app/enrolledClass?email=${User?.email}`);
    if (!response.ok) {
      throw new Error('Failed to fetch bookmarks');
    }
    const bookmarksData = await response.json();

    // Sort the payment history in descending order based on the date
    const sortedBookmarks = bookmarksData.sort((a, b) => new Date(b.date) - new Date(a.date));

    return sortedBookmarks;
  });

  return (
    <div>
      <div className="w-full md:w-5/5 lg:w-4/4 bg-white rounded-lg shadow-lg overflow-hidden">
        <SectionTitle title={"Payment History !!"}></SectionTitle>
        {
          carts?.length === 0 ?
      
          
          <div className="flex flex-col justify-center min-h-[700px] items-center p-8">
          <img src={"https://i.ibb.co/wJVvS1F/603828-612x612.jpg"} alt="Empty Cart" className="w-[500px] mb-4" />
          <p className="text-black text-3xl my-10">Nothing here. Add some?</p>
        </div>
          :
          <div>
        
          <table className="table w-full">
            <thead>
              <tr className="text-white bg-purple-400">
                <th></th>
                <th></th>
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Payment</th>
                <th>Transaction ID</th>
                <th>Payment Date</th>
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
                  <td className="ps-10">{cart.tranjectId}</td>
                  <td>{cart.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
        }
 
      </div>
    </div>
  );
};

export default PaymentHis;