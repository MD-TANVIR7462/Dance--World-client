import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
   const error = useRouteError()

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <img src='../../../public/bubble-gum-error-404.gif' alt="Error" className="mx-auto  w-72 h-64" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{error?.error?.message}</h2>
        <p className="text-gray-600 mb-6 text-7xl font-bold"> {error?.status}</p>
        
        <a
          href="/"
          className="btn btn-warning  text-white font-bold  rounded-lg shadow-lg hover:bg-gradient-to-r from-yellow-400 to-yellow-500  space-x-2"
        >
          Back to Home
        </a>
      </div>
    </div>
   );
};

export default ErrorPage;


