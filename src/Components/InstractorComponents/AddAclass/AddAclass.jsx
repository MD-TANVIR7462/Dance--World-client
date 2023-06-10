import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";
import { AuthContext } from '../../Provider/AuthProvider';


const imgHostingToken = import.meta.env.VITE_API_Token



const AddAclass = () => {
   const { User } = useContext(AuthContext)
   console.log(User?.displayName)

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
               const newItem = { className, price, email, instructor, image: imgURL, Availableseats, students: 0, status: "pending" }
               console.log(newItem)
               fetch('http://localhost:5000/addaclass', {
                  method: 'POST',

                  headers: {
                     'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(newItem)
               })
             .then(res=>res.json())
             .then(data=>{
               console.log(data)
               Swal.fire({
                  icon:'success',
                  title: 'Class Added Successfully',
                  showConfirmButton: false,
                  timer: 1500,
               })
               reset()
             
             })
            }
         })

   };


   return (
      <div className="w-full px-10">

         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control grid grid-cols-2 gap-5

                mb-4">
               <div>
                  <label className="label">
                     <span className="label-text font-semibold">Class Name*</span>
                  </label>
                  <input type="text" placeholder="className"
                     {...register("className", { required: true, maxLength: 120 })}
                     className="input input-bordered w-full " />
               </div>
               <div>
                  <label className="label">
                     <span className="label-text font-semibold">Instructor Name*</span>
                  </label>
                  <input
                     type="text"
                     placeholder="Instructor Name"
                     {...register("instructor", {
                        required: true,
                        maxLength: 120
                     })}
                     className="input input-bordered w-full"
                     readOnly
                     value={User?.displayName}
                  />
               </div>
            </div>
            <div className="flex my-4">
               <div className="form-control w-full ">
                  <label className="label">
                     <span className="label-text font-semibold">Instructor email*</span>
                  </label>
                  <input
                     type="email"
                     placeholder="Instructor email"
                     {...register("email", {
                        required: true,
                        maxLength: 120
                     })}
                     className="input input-bordered w-full"
                     readOnly
                     value={User?.email}
                  />
               </div>
               <div className="form-control w-full ml-4">
                  <label className="label">
                     <span className="label-text font-semibold">Price*</span>
                  </label>
                  <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
               </div>
               <div className="form-control w-full ml-4">
                  <label className="label">
                     <span className="label-text font-semibold">Seats*</span>
                  </label>
                  <input type="number" {...register("Availableseats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
               </div>
            </div>

            <div className="form-control w-full my-4">
               <label className="label">
                  <span className="label-text">Class Image*</span>
               </label>
               <input type="file"  {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
            </div>
            <input className="btn btn-warning btn-sm mt-4" type="submit" value="Add Item" />
         </form>
      </div>
   );
};

export default AddAclass;


