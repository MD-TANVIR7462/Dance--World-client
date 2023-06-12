import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UseRole from '../../../Hooks/UseRole';
import { AuthContext } from '../Provider/AuthProvider';





const AdminRoute = ({children}) => {
   const { findUser } = UseRole()
   const location = useLocation()
   // console.log(location)
const {User,loading} = useContext(AuthContext)

if(loading){
   return <div className='flex min-h-screen flex-col justify-center items-center text-red-700'>
      <progress className="progress  w-56"></progress>
   </div>
}
if(User && findUser?.role === "admin"){
   return children
}
else{
  return <Navigate state={{from:location}} to={'/'} replace={true}></Navigate>
}

      
   };


export default AdminRoute;