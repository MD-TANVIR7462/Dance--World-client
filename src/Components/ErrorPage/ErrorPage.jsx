import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
   const error = useRouteError()

   return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <img src='https://assets2.lottiefiles.com/packages/lf20_suhe7qtm.json' alt="Error" className="mx-auto mb-6 w-40 h-40" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{error.error.message}</h2>
        <p className="text-gray-600 mb-6 text-7xl font-bold"> {error.status}</p>
        
        <a
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Back to Home
        </a>
      </div>
    </div>
   );
};

export default ErrorPage;




