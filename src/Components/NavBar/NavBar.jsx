import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const NavBar = () => {
   const {User} =useContext(AuthContext)

  

   const navOptions = <>

      <li><Link to={'/'}>Home</Link></li>
      <li><Link to={'/Instructors'}>Instructors</Link></li>
      <li><Link to={'/Classes'}>Our Classes</Link></li>
      

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
                       User&& <li><Link to={'/Dashboard'}>Dashboard</Link></li>
                     }

                  </ul>
               </div>
               <div className='flex items-center'>
                  <img src={"https://i.ibb.co/f2YbNWG/a8e152ea86a0f346f14a90c42c342c6b.jpg"} className='w-20 flex rounded-full' alt="" />
                  <span className="text-yellow-400 text-xl ps-2">Dance World</span>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
               <ul className="menu menu-horizontal px-1 text-yellow-300">
                  {navOptions}
                  {
                        User && <li><Link to={'/Dashboard'}>Dashboard</Link></li>
                     }
               </ul>


            </div>
            <div className="navbar-end">
               {User ? (
                  <div className="flex justify-center gap-4">
                     <div className="tooltip" data-tip={User?.displayName ? User?.displayName : 'No-Name'}>
                        <label className="btn btn-ghost btn-circle avatar">
                           <div className="w-10 rounded-full">
                              <img src={User.photoURL} />
                           </div>
                        </label>
                     </div>

                     <button className="btn btn-warning btn-outline  rounded-lg shadow-lg hover:bg-gradient-to-r from-yellow-400 to-yellow-500  flex items-center justify-center space-x-2">
                        
                        <span className="animate-bounce">Logout</span>
                     </button>



                  </div>
               ) : (
                  <Link to={'/login'}>
                      <button className="btn btn-warning btn-outline  rounded-lg shadow-lg hover:bg-gradient-to-r from-yellow-400 to-yellow-500  flex items-center justify-center space-x-2">
                        
                        <span className="animate-bounce">Login</span>
                     </button>
                  </Link>
               )}
            </div>
         </div>
      </div>
   );
};

export default NavBar;