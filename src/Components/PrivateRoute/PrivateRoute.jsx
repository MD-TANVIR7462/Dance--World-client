import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const PrivateRoute = ({children}) => {
   const location = useLocation()
   // console.log(location)
const {user,loading} = useContext(AuthContext)

if(loading){
   return <div className='flex min-h-screen flex-col justify-center items-center text-red-700'>
      <progress className="progress  w-56"></progress>
   </div>
}
if(isLoggedIn){
   return children
}
else{
  return <Navigate state={{from:location}} to={'/login'} replace={true}></Navigate>
}

      
   };


export default PrivateRoute;