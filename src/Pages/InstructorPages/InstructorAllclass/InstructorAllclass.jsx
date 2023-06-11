import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Components/Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const InstructorAllclass = () => {
   const [classes, setClasses] = useState([]);
   const { User } = useContext(AuthContext);
   const navigate = useNavigate()
 useEffect(() => {
      fetch(`http://localhost:5000/instructorclasses?email=${User?.email}`)
         .then(res => res.json())
         .then(data => {
            console.log(data);
            setClasses(data);
         });
   }, [User]);


   const updateDetails =(id)=>{
      navigate(`/dashboard/updateDetails/${id}`)
         }





   return (
      <div>
         {/* <dialog id="my_modal_1" className="modal">
           <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
               <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                     <label className="block text-gray-700 font-semibold mb-2">Class Name*</label>
                     <input
                        type="text"
                        placeholder="Class Name"
                        {...register("className", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full p-2"
                     />
                  </div>
                  <div>
                     <label className="block text-gray-700 font-semibold mb-2">Instructor Name*</label>
                     <input
                        type="text"
                        placeholder="Instructor Name"
                        {...register("instructor", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full p-2"
                        readOnly
                        value={User?.displayName}
                     />
                  </div>
               </div>
               <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Price*</label>
                  <input
                     type="number"
                     placeholder="Price"
                     {...register("price", { required: true, min: 0 })}
                     className="input input-bordered w-full p-2"
                  />
               </div>
               <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Available Seats*</label>
                  <input
                     type="number"
                     placeholder="Available Seats"
                     {...register("Availableseats", { required: true, min: 0 })}
                     className="input input-bordered w-full p-2"
                  />
               </div>
               <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Class Image*</label>
                  <input
                     type="file"
                     {...register("image", { required: true })}
                     className="file-input file-input-bordered file-input-warning w-full"
                  />
               </div>
               <div className="flex justify-center">
                  <button type="submit" className="btn btn-primary mr-2">Update</button>
                  <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
               </div>
            </form>

         </dialog> */}

         <div className="w-full md:w-5/5 lg:w-4/4 bg-white rounded-lg shadow-lg overflow-hidden">
            <h2 className="text-4xl font-bold text-center my-10">BOOkMARKED CLASSES !!</h2>
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
                           <button className="btn btn-warning btn-outline btn-sm text-white font-bold hover:bg-warning transition-all">
                              Feedbacks
                           </button>
                        </td>
                        <td>
                           <button
                          onClick={()=>updateDetails(cart._id)}    className="btn btn-primary btn-outline btn-sm text-white font-bold hover:bg-primary modal-action"
                           >
                              Update
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};

export default InstructorAllclass;
