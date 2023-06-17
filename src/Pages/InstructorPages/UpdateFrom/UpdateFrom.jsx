import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { AuthContext } from '../../../Components/Provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';

const imgHostingToken = import.meta.env.VITE_API_Token;

const UpdateFrom = () => {
   const navigate = useNavigate()
   const data = useLoaderData()

   const {_id} = data
 
   const {User} = useContext(AuthContext)
   const { register, handleSubmit, reset } = useForm();
   const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`;


   const onSubmit = data => {
      const formData = new FormData();
      formData.append('image', data.image[0]);

      fetch(img_hosting_url, {
         method: 'POST',
         body: formData
      })
         .then(res => res.json())
         .then(imgResponse => {
            if (imgResponse.success) {
               const imgURL = imgResponse.data.display_url;

               const { className, price, Availableseats } = data;
               const newAvailableseats = parseFloat(Availableseats);

               const newPrice = parseFloat(price )
            
               const newItem = {
                  className,
                  price : newPrice,
                  image: imgURL,
                  Availableseats : newAvailableseats
               };
              
        fetch(`https://ass-12-server-mu.vercel.app/classupdate/${_id}`, {
                  method: "PATCH",
                  headers: {
                    "content-type": 'application/json'
                  },
                  body: JSON.stringify(newItem)
                })
                  .then(res => res.json())
                  .then(data => {
             
                    Swal.fire({
                      icon: 'success',
                      title: 'Class Updated Successfully',
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate("/dashboard/ALlclassesIns")
                    reset();
                  });
            }
         });
   };

   return (
      <div>
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
               
                  <button type="submit" className="btn btn-primary mr-2">Update</button>
                 
              
            </form>
      </div>
   );
};

export default UpdateFrom;