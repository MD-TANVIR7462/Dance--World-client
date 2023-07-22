import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaRegShareSquare } from 'react-icons/fa';
import { AiOutlineLogin } from 'react-icons/ai';

const NavBar = () => {
const [theme , setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme") : "light");

useEffect(() => {
localStorage.setItem("theme", theme)
const localtheme = localStorage.getItem("theme")
document.querySelector("html").setAttribute("data-theme", localtheme)
},[theme])

   const { User, signOutUSer } = useContext(AuthContext)

   const logout = () => {
      signOutUSer()
         .then((result) => {
            
            Swal.fire({
               position: 'top-center',
               icon: 'success',
               title: 'successfuly LogOut',
               showConfirmButton: false,
               timer: 1500
            })
         })
         .catch((error)=>{
            console.log(error.message);
         })
   }


const handleToggle = (e) =>{
if (e.target.checked){
   setTheme("dark")

}
else{
   setTheme("light")
}
}



   const navOptions = <>

      <li className='text-lg'><Link to={'/'}>Home</Link></li>
      <li className='text-lg'><Link to={'/instructors'}>Instructors</Link></li>
      <li className='text-lg'><Link to={'/classes'}>Our Classes</Link></li>
     


   </>
   return (
      <div>
         <div className="navbar fixed md:py-5  z-10  text-white bg-gray-300 bg-opacity-20 md:px-10">
            <div className="navbar-start">
               <div className="dropdown">
                  <label tabIndex={0} className="btn btn-ghost lg:hidden">
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
                  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-yellow-300">
                     {navOptions}
                     {
                        User && <li  className='text-lg'><Link to={'/dashboard'}>Dashboard</Link></li>
                     }

                  </ul>
               </div>
               <div className='flex items-center'>
                  <img src={"https://i.ibb.co/f2YbNWG/a8e152ea86a0f346f14a90c42c342c6b.jpg"} className='md:w-20 w-12  flex rounded-full '  alt="" />
                  <span className="text-yellow-400 text-base font-bold md:text-2xl ps-1 hidden md:flex ">Dance World</span>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1 text-yellow-300">
                  {navOptions}
                  {
                     User && <li  className='text-lg'><Link to={'/dashboard'}>Dashboard</Link></li>
                  }
               </ul>


            </div>
            
            <div className="navbar-end">
               <span className='px-2'>
               <label className="swap swap-rotate">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" onChange={handleToggle} />
  
  {/* sun icon */}
  <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z"/></svg>
  
  {/* moon icon */}
  <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/></svg>
  
</label>
               </span>
               {User ? (
                  <div className="flex justify-center gap-4">
                     <div className="tooltip" data-tip={User?.displayName ? User?.displayName : 'No-Name'}>
                        <label className="btn btn-ghost btn-circle avatar">
                           <div className=" w-10 rounded-full">
                              <img src={User.photoURL}  />
                           </div>
                        </label>
                     </div>

                     <button  onClick={logout} className="btn btn-md text-2xl  text-white  btn-warning   rounded-lg shadow-lg hover:bg-gradient-to-r from-yellow-400 to-yellow-500  flex items-center justify-center space-x-2">

                        <span ><FaRegShareSquare/></span>
                     </button>



                  </div>
               ) : (
                  <Link to={'/login'}>
                     <button className="btn btn-warning  text-2xl font-bold text-white rounded-lg shadow-lg hover:bg-gradient-to-r from-yellow-400 to-yellow-500  flex items-center justify-center space-x-2">

                        <span ><AiOutlineLogin/></span>
                     </button>
                  </Link>
               )}
            </div>
            
         </div>
      </div>
   );
};

export default NavBar;