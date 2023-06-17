import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Components/Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';
import { FaCommentAlt, FaRegEdit } from 'react-icons/fa';


const InstructorAllclass = () => {
   const [classes, setClasses] = useState([]);
   const [feedback, Setfeedback] = useState('')
   const { User } = useContext(AuthContext);
   const navigate = useNavigate()
   useEffect(() => {
      fetch(`https://ass-12-server-mu.vercel.app/instructorclasses?email=${User?.email}`)
         .then(res => res.json())
         .then(data => {
         
            setClasses(data);
         });
   }, [User]);


   const updateDetails = (id) => {
      navigate(`/dashboard/updateDetails/${id}`)
   }


const FeedbackHandle = (_id)=>{

   fetch(`https://ass-12-server-mu.vercel.app/instructorclasses/${_id}`)
   .then(res=>res.json())
   .then(data=>Setfeedback(data.Feedback))
   window.my_modal_1.showModal()
}


   return (
      <div>
         <div className="w-full md:w-5/5 lg:w-4/4 bg-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-4xl font-bold text-center my-10">MY CLASSES !!</h2>
            <table className="table w-full">
               <thead>
                  <tr className="text-white bg-purple-400">
                     <th></th>
                     <th></th>
                     <th>Class Name</th>
                     <th>Price</th>
                     <th>Enrolled Students</th>
                     <th>Status</th>
                     <th>Feedbacks</th>
                     <th>Update It</th>
                  </tr>
               </thead>
               <tbody>
                  {classes?.map((cart, index) => (
                     <tr key={cart?._id}>
                        <th>{index + 1}</th>
                        <td>
                           <img src={cart?.image} className="w-24 rounded-xl" alt="" />
                        </td>
                        <td>{cart?.className}</td>
                        <td>{cart?.price} $</td>
                        <td className="ps-10">{cart?.students}</td>
                        <td className="font-semibold">{cart?.status}</td>
                        <td>
                           <button
                           disabled={!cart?.Feedback}
                              onClick={()=> FeedbackHandle(cart?._id)}
                              className="btn bg-purple-500  btn-md text-lg text-cyan-400 font-bold hover:bg-purple-600">
                             <FaCommentAlt/>
                           </button>
                        </td>
                        <td>
                           <button
                              onClick={() => updateDetails(cart._id)} className="btn btn-warning btn-outline   btn-md font-bold text-xl "
                           >
                             <FaRegEdit/>
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
         <dialog id="my_modal_1" className="modal">
            <form method="dialog" className="modal-box">
               <h3 className="font-bold text-lg">Hellow {User?.displayName}</h3>
               <p className="py-4"><span className='text-black font-bold underline'>From Admin  </span> : {feedback}</p>
               <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
               </div>
            </form>
         </dialog>
      </div>
   );
};

export default InstructorAllclass;







