import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { FaBeer } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Resister = () => {
   const { CreatUSerEmail, signOutUSer, updateUser } = useContext(AuthContext)
   const [error, setError] = useState('');
   const location = useLocation();
   const navigate = useNavigate();
   const mainLocation = location.state?.from?.pathname || '/';

   const handleResiter = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value
      const email = form.email.value;
      const password = form.password.value;
      const confirmPassword = form.confirmPassword.value;

      console.log({ email, password, confirmPassword, name });
      if (password === confirmPassword) {
         //     CreatUSerEmail(email, password)
         //     .then((userCredential) => {

         //       const user = userCredential.user;
         //       console.log(user);

         //       updateUser(name)
         //       .then(() => {
         //          // Profile updated!
         //          console.log('Profile updated');
         //          // ...
         //        }).catch((error) => {
         //          setError(error.message)
         //        });
         //     })
         //     .catch((error) => {
         //       const errorCode = error.code;
         //       const errorMessage = error.message;
         //   setError(errorMessage)
         //     });

         CreatUSerEmail(email, password)
            .then((userCredential) => {

               const user = userCredential.user;
               console.log(user)

               updateUser(name)
                  .then(() => {
                     signOutUSer()
                     Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Resister Successfull LOGIN NOW!!',
                        showConfirmButton: false,
                        timer: 1500
                     })
                     navigate('/login')
                     from.reset()
                  })
                  .catch(error => {
                     setError(error.message)
                  })
               
                  

            })
            .catch((error) => {
               setError(error.message)
            });



      }


   };
   return (
      <div className="min-h-screen flex items-center justify-center    bg-gradient-to-r from-pink-500 to-indigo-500 ">
         <div className="flex flex-col md:mt-20 md:flex-row w-full md:w-4/5 bg-gradient-to-r from-yellow-500 to-indigo-500 rounded-lg shadow-lg overflow-hidden">
            <div className="relative md:w-3/5">
               <img
                  src={'https://i.ibb.co/Y821mX7/3333-MConverter-eu.jpg'}
                  alt="Background"
                  className="w-full h-full object-cover"
               />
            </div>
            <div className="w-full md:w-3/6 px-8 py-12">
               <h2 className="text-3xl font-bold mb-4 text-center md:text-left text-white">Resister Here </h2>
               <form className="space-y-6" onSubmit={handleResiter}>
                  <div>
                     <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Name
                     </label>
                     <input
                        name="name"
                        type="text"
                        required
                        className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your Name"
                     />
                  </div>

                  <div>
                     <label htmlFor="email-address" className="block text-sm font-medium text-white mb-2">
                        Email address
                     </label>
                     <input
                        name="email"
                        type="email"

                        required
                        className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Enter your email address"
                     />
                  </div>
                  <div>
                     <label htmlFor="password" className="block text-sm  text-white mb-2 font-medium">
                        Password
                     </label>
                     <div className="relative">
                        <input
                           name="password"
                           type="text"

                           required
                           className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                           placeholder="Enter your password"
                        />

                     </div>
                  </div>

                  <div>
                     <label htmlFor="confirm-password" className="block text-sm  text-white mb-2 font-medium">
                        Confirm-Password
                     </label>
                     <div className="relative">
                        <input
                           name="confirmPassword"
                           type="text"

                           required
                           className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                           placeholder="Confirm-password"
                        />

                     </div>
                  </div>

                  <div>
                     <label className="block text-sm  text-white mb-2 font-medium">
                        Choose Your Profile
                     </label>
                     <div className="relative">
                        <input type="file" className="file-input file-input-bordered file-input-warning w-full max-w-xs" />


                     </div>
                  </div>
                  {error && <p className="text-yellow-500">{error}</p>}
                  <div>
                     <p className="text-sm text-center md:text-left text-white">
                        Have an Acaount ?
                        <Link to="/login" className="font-medium text-yellow-400 ps-1 hover:text-indigo-700">
                           Login....
                        </Link>
                     </p>
                  </div>
                  <div>
                     <p className='flex justify-center'>
                        <button
                           type="submit"
                           className="btn btn-warning btn-outline  w-5/6  rounded-lg shadow-lg hover:bg-gradient-to-r from-yellow-400 to-yellow-500  flex items-center justify-center space-x-2"
                        >
                           Log in
                        </button>
                     </p>
                  </div>
                  
               </form>

            </div>
         </div>
      </div>
   );
};

export default Resister;