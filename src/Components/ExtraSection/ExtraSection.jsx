import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';

const ExtraSection = () => {
  const sectionVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className=''>
      <Parallax bgImage="https://i.ibb.co/k9xVxd1/Web-banner-No-words.png" strength={500}>
        <div className="parallax-container ">
          <div className="overlay ">
            <motion.div
              className="content"
              initial="initial"
              animate="animate"
              variants={sectionVariants}
            >
              <h2 className="text-4xl font-bold mb-8">70 %  OFF FOR TODAYS ENROLMENT</h2>
              <p className="text-base md:px-32 py-4">
                Join us this summer for an extraordinary dance experience at Dance World's Summer School Dance Champ! Discover your passion for dance, learn from world-class instructors, and unleash your full potential in a vibrant and supportive community.
              </p>
           
             
              <a href="/register" className="btn btn-warning ">Enroll Now</a>
            </motion.div>
          </div>
        </div>
      </Parallax>

      <style jsx>{`
        .parallax-container {
          position: relative;
          height: 700px;
          overflow: hidden;
        }
        
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.6);
        }
        
        .content {
          text-align: center;
          padding: 40px;
          color: #ffffff;
        }
        
        .section-heading {
          font-size: 60px;
          margin-bottom: 20px;
          font-weight: bold;
          line-height: 1.2;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .section-text {
          font-size: 24px;
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .cta-button {
          display: inline-block;
          padding: 12px 24px;
          font-size: 20px;
          font-weight: bold;
          text-decoration: none;
          background-color: #ff4081;
          color: #ffffff;
          border-radius: 4px;
          transition: background-color 0.3s ease;
        }
        
        .cta-button:hover {
          background-color: #f50057;
        }
        
        @media (max-width: 768px) {
          .section-heading {
            font-size: 40px;
          }
        
          .section-text {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  );
};

export default ExtraSection;
