import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Components/Provider/AuthProvider';


const InstructorAllclass = () => {
   const [classes,setclasses]= useState([])
const {User}=useContext(AuthContext)
console.log(User.email)
useEffect(()=>{
fetch(`http://localhost:5000/instructorclasses?email=${User?.email}`)
.then(res=>res.json())
.then(data=>{
   console.log(data)
   setclasses(data)})
},[])

   return (
      <div >
      <div className="w-full md:w-5/5 lg:w-4/4  bg-white rounded-lg shadow-lg overflow-hidden">

      <h2 className='text-4xl font-bold text-center my-10'>BOOkMARKED CLASSES !!</h2>


  <table className="table w-full">
       <thead>
         <tr className="text-white bg-purple-400">
            <th></th>
            <th></th>
           <th>Class Name</th>
           <th>Price</th>
           <th>Enrolld Student's</th>
           <th>Status</th>
           <th>FeedBacks</th>
           <th>Update It</th>
         </tr>
       </thead>
      
     
       <tbody>
              {classes?.map((cart, index) => (
                <tr key={cart._id}>
                  <th>{index + 1}</th>
                  <td><img src={cart?.image} className='w-24 rounded-xl ' alt="" /></td>
                  <td>{cart?.className}</td>
                  <td>{cart?.price} $</td>
                  <td className='ps-10'>{cart?.students}</td>
                  <td className='font-semibold'>{cart?.status} </td>
                  <td>
                  <button  className="btn btn-warning btn-outline btn-sm text-white font-bold hover:bg-warning transition-all" >Feedbacks</button>
                  </td>
                  <td>
                    <button  className="btn btn-primary btn-outline btn-sm text-white font-bold hover:bg-primary transition-all">Update</button>
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