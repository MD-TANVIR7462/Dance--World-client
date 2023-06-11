// import { useEffect } from 'react';
// import { motion, useAnimation } from 'framer-motion';

// const DashboardHome = () => {
//   const controls = useAnimation();

//   useEffect(() => {
//     controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-200 to-pink-400">
//       <header className="bg-transparent py-8 px-4">
//         <h1 className="text-4xl font-bold text-white">Welcome to Dance Dashboard</h1>
//       </header>
//       <main className="flex flex-col items-center justify-center flex-1">
//         <motion.img
//           src="https://i.ibb.co/5T8mC7Z/240-F-277242783-Ub83l-Wi91s2-Vnm-RIhmk-D6q3n-Z3ogtb-JE.jpg" // Replace with your dance image source
//           alt="Dance"
//           className="w-72 h-72 rounded-full mb-8 shadow-lg"
//           initial={{ opacity: 0, y: 100, scale: 0 }}
//           animate={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//         />
//         <motion.div
//           className="text-center"
//           initial={{ opacity: 0, y: 50 }}
//           animate={controls}
//         >
//           <motion.h2
//             className="text-5xl font-bold text-white mb-4"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
//           >
//             Explore the Art of Dance
//           </motion.h2>
//           <motion.p
//             className="text-lg text-white mb-8"
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//           >
//             Discover new dance styles, learn from experts, and express yourself through movement.
//           </motion.p>
//           <motion.button
//             className="bg-white text-purple-600 font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
//             initial={{ opacity: 0, scale: 0 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
//           >
//             Get Started
//           </motion.button>
//         </motion.div>
//       </main>
//       <footer className="bg-transparent py-4 px-4">
//         <p className="text-gray-200 text-sm text-center">&copy; 2023 Dance Dashboard. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default DashboardHome;

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const DashboardHome = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
       <header className="bg-white  px-8 shadow-md w-full">
        <h1 className="text-2xl font-bold text-gray-800 py-20 text-center">Welcome to Dance Dashboard</h1>
      </header>
      <main className="flex flex-col items-center justify-center flex-1">
        <motion.img
          src="https://i.ibb.co/5T8mC7Z/240-F-277242783-Ub83l-Wi91s2-Vnm-RIhmk-D6q3n-Z3ogtb-JE.jpg" 
          alt="Dance"
          className="w-72 h-72 rounded-full mb-8 shadow-lg"
          initial={{ opacity: 0, y: 100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <motion.h2
            className="text-5xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Explore the Art of Dance
          </motion.h2>
          <motion.p
            className="text-lg text-black mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            Discover new dance styles, learn from experts, and express yourself through movement.
          </motion.p>
          <motion.button
            className="bg-warning text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            Get Started
          </motion.button>
        </motion.div>
      </main>
      <footer className="bg-transparent py-4 px-4">
        <p className="text-indigo-500 text-sm text-center">&copy; 2023 Dance Dashboard. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DashboardHome;
