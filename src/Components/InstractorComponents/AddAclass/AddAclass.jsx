import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';



const imgHostingToken = import.meta.env.VITE_API_Token



const AddAclass = () => {
   const { User } = useContext(AuthContext)
 const navigate = useNavigate()

   const { register, handleSubmit, reset } = useForm();
   const img_hosting_url = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`

   const onSubmit = data => {

      const formData = new FormData();
      formData.append('image', data.image[0])

      fetch(img_hosting_url, {
         method: 'POST',
         body: formData
      })
         .then(res => res.json())
         .then(imgResponse => {
            if (imgResponse.success) {
               const imgURL = imgResponse.data.display_url;
               const { className, price, email, instructor, image, Availableseats,
               } = data;
               const newPrice = parseFloat(price)
               const newSeats = parseFloat(Availableseats)
               
               const newItem = { className, price : newPrice , email, instructor, image: imgURL, Availableseats : newSeats , students: 0, status: "pending" }
              
               fetch('https://ass-12-server-mu.vercel.app/addaclass', {
                  method: 'POST',

                  headers: {
                     'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(newItem)
               })
             .then(res=>res.json())
             .then(data=>{
             
               Swal.fire({
                  icon:'success',
                  title: 'Class Added Successfully',
                  showConfirmButton: false,
                  timer: 1500,
               })
               navigate('/dashboard')
               reset()
             
             })
            }
         })

   };


   return (
      <div className="w-full px-10">

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
      <label className="block text-gray-700 font-semibold mb-2">Instructor Email*</label>
      <input
         type="email"
         placeholder="Instructor Email"
         {...register("email", { required: true, maxLength: 120 })}
         className="input input-bordered w-full p-2"
         readOnly
         value={User?.email}
      />
   </div>
   <div className="grid grid-cols-2 gap-4 mb-6">
      <div>
         <label className="block text-gray-700 font-semibold mb-2">Price*</label>
         <input
            type="number"
            {...register("price", { required: true })}
            placeholder="Price"
            className="input input-bordered w-full p-2"
         />
      </div>
      <div>
         <label className="block text-gray-700 font-semibold mb-2">Seats*</label>
         <input
            type="number"
            {...register("Availableseats", { required: true })}
            placeholder="Available Seats"
            className="input input-bordered w-full p-2"
         />
      </div>
   </div>
   <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2">Class Image*</label>
      <input
         type="file"
         {...register("image", { required: true })}
         className="file-input file-input-bordered file-input-warning  w-full "
      />
   </div>
   <p className='text-center'>
   <input
      className="btn btn-warning btn-neutral  mt-4 px-6 py-3 text-white rounded"
      type="submit"
      value="Add Class"
   />
   </p>
</form>


      </div>
   );
};

export default AddAclass;


