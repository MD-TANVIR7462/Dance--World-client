import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaGoogle } from 'react-icons/fa';

const LoginPage = () => {
  const [error, seterror] = useState('')
  const { googleCreatUSer, SignInUSer } = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const mainlocation = location.state?.from?.pathname || '/'

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
  
    

    SignInUSer(email, password)
      .then((result) => {

       
        Swal.fire({
          position: 'top-right',
          icon: 'success',
          title: 'Login successful',
          showConfirmButton: false,
          timer: 1500
        })

        form.reset()
        navigate(mainlocation)

      })
      .catch((error) => {

        seterror(error.message)
      
      });

  };


  const handleGoogle = () => {
    googleCreatUSer()
      .then((result) => {

          const {displayName,email,photoURL}   =  result.user

          const user = { name : displayName, image : photoURL,email : email};
      

    


        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Login successful',
          showConfirmButton: false,
          timer: 1500
        })


        fetch('https://ass-12-server-mu.vercel.app/allusersGoogle', {
          method: 'POST',
          headers: {
             "content-type": "application/json"
          },
          body: JSON.stringify(user)
       })
          .then(res => res.json())
          .then(data => {
          })


        navigate(mainlocation)



      })
      .catch((error) => {
        const errorCode = error.code;
        seterror(error.message)
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-r from-pink-300 to-indigo-400 ">
      <div className="flex flex-col md:flex-row w-full md:w-4/5 bg-gradient-to-r from-yellow-500 to-indigo-500 rounded-lg shadow-lg overflow-hidden">
        <div className="relative md:w-3/5">
          <img
            src={'https://i.ibb.co/qnQt4Yc/Laughing-Samurai-Pros-and-Cons-of-Using-Animations-in-Your-Web-Design-scaled.jpg'}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-3/6 px-8 py-12">
          <h2 className="text-3xl font-bold mb-4 text-center md:text-left text-white">Log in to Your Account</h2>
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email-address" className="block text-sm font-medium text-white mb-2">
                Email address
              </label>
              <input
                name="email"
                type="email"
                autoComplete="email"
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
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-4 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="absolute top-1/2 right-3 text-xl transform -translate-y-1/2 focus:outline-none"
                  onClick={() => {
                    const passwordInput = document.querySelector('input[name="password"]');
                    passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
                  }}
                >
              <FaEye/>
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm text-center md:text-left text-white">
                New Here?
                <Link to="/register" className="font-medium text-yellow-400 ps-1 hover:text-indigo-700">
                  Register Now....
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
            {error && <p className="text-yellow-500">{error}</p>}
          </form>
          <div className="mt-4 flex flex-col items-center ">
            <p className="text-sm text-center text-white pb-5">Sign Up With</p>
            <button className='btn btn-circle btn-warning px-4 text-center text-blue-800' onClick={handleGoogle}><FaGoogle></FaGoogle></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
