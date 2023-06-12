import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title }) => {
  const titleVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <motion.h2
      className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-20"
      variants={titleVariants}
      initial="initial"
      animate="animate"
    >
      <span className="relative inline-block">
        <span className="border-b-4 border-pink-500 pb-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500">
          {title}
        </span>
       
      </span>
    </motion.h2>
  );
};

export default SectionTitle;
