import React, { useState } from 'react';
import useinsClass from '../../../../Hooks/useinsClass';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const AdminMenageClass = () => {
   const [feedback, setFeedback] = useState('');
   const [isOpen, setIsOpen] = useState(false);
   const [selectedId, setSelectedId] = useState(null);
   const { classes, refetch } = useinsClass();

   const handleApprove = (_id, status) => {
      console.log(_id, status);
      const newstatus = { status };
      console.log(newstatus);

      fetch(`https://ass-12-server-mu.vercel.app/classupdateAdmin/${_id}`, {
         method: 'PATCH',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(newstatus),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            Swal.fire({
               icon: 'success',
               title: 'Class Approved',
               showConfirmButton: false,
               timer: 1500,
            });

            refetch();
         });
   };

   const handleFeedbackChange = (e) => {
      setFeedback(e.target.value);
   };

   const handleSubmit = () => {
      if (!selectedId) {

         return; 
      }

      
      const feedbackData = { Feedback: feedback };
     
   
      fetch(`https://ass-12-server-mu.vercel.app/AdminFeedback/${selectedId}`, {
         method: 'PATCH',
         headers: {
            'content-type': 'application/json',
         },
         body: JSON.stringify(feedbackData),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
            Swal.fire({
               icon: 'success',
               title: 'Feedback Sent',
               showConfirmButton: false,
               timer: 1500,
            });
            refetch();
         });

      setFeedback('');
      closeModal();
   };

   const openModal = (_id) => {
      setSelectedId(_id);
      
      setIsOpen(true);
   };

   const closeModal = () => {
      setSelectedId(null);
      setIsOpen(false);
   };

   return (
      <div className="w-full   bg-white rounded-lg shadow-lg overflow-hidden">
         <h2 className="text-4xl font-bold text-center my-10">MY CLASSES !!</h2>
         <table className="table w-full">
            <thead>
               <tr className="text-white bg-purple-400">
                  <th></th>
                  <th></th>
                  <th>Class Name</th>
                  <th>Instructor Name </th>
                  <th>Instructor Email </th>
                  <th>Price</th>
                  <th>Available Seats</th>
                  <th>Status</th>
                  <th>Feedback</th>
                  <th>Approve / Deny</th>
               </tr>
            </thead>
            <tbody>
               {classes?.map((cart, index) => (
                  <tr key={cart?._id}>
                     <th>{index + 1}</th>
                     <td>
                        <img src={cart?.image} className="w-20 rounded-xl" alt="" />
                     </td>
                     <td>{cart?.className}</td>
                     <td>{cart?.instructor}</td>
                     <td>{cart?.email}</td>
                     <td>{cart?.price} $</td>
                     <td className="ps-10">{cart?.Availableseats}</td>
                     <td className="font-semibold">{cart?.status}</td>
                     <td>
                        <button
                           onClick={() => openModal(cart?._id)}
                           className="btn btn-success btn-outline btn-xs text-white font-bold hover:bg-warning transition-all"
                        >
                           Feedback
                        </button>
                     </td>
                     <td>
                        <button
                           onClick={() => handleApprove(cart?._id, 'Approve')}
                           disabled={cart.status === 'Approve' || cart.status === 'Deny'}
                           className="btn btn-primary btn-outline btn-xs  mr-2 text-white font-bold hover:bg-primary"
                        >
                           Approve
                        </button>
                        <button
                           onClick={() => handleApprove(cart?._id, 'Deny')}
                           disabled={cart.status === 'Approve' || cart.status === 'Deny'}
                           className="btn btn-warning btn-outline btn-xs text-white font-bold hover:bg-primary"
                        >
                           Deny
                        </button>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>

         {isOpen && (
            <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
               <div className="modal-box">
                  <span className='flex justify-end'>
                  <button className="btn btn-square bg-gray-300 text-blue-500" onClick={closeModal}>
                     X
                  </button>
                  </span>

                  <p className="py-4">Write Your Feedback !!</p>

                  <div className="my-4">
                     <input
                        type="text"
                        placeholder="Write your feedback"
                        value={feedback}
                        onChange={handleFeedbackChange}
                        className="border border-gray-300 rounded p-2 w-full"
                     />
                  </div>

                  <div className="modal-action">
                     <button className="btn btn-warning btn-outline" onClick={handleSubmit}>
                        Send Feedback
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default AdminMenageClass;
