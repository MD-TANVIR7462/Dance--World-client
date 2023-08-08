import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaUsers } from "react-icons/fa";
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import SectionTitle from '../SectionTitle/SectionTitle';
import { Parallax } from 'react-parallax';
const About = () => {

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= Math.floor(rating); i++) {
      stars.push(<FaStar key={i} className="text-yellow-400" />);
    }
    if (rating % 1 !== 0) {
      stars.push(
        <FaStarHalfAlt key={Math.ceil(rating)} className="text-yellow-400" />
      );
    }
    for (let i = Math.ceil(rating) + 1; i <= 5; i++) {
      stars.push(<FaStar key={i} className="text-gray-300" />);
    }
    return stars;
  };



  return (
    <div className="mb-12 mt-8 md:mb-20">
      <SectionTitle title={"Happy Students"} />
      <Parallax bgImage="https://i.ibb.co/VNswWhr/arty.jpg" strength={500}>
        <div  className="relative">
          <div className="absolute inset-0 opacity-30 bg-blue-900"></div>
          <div className="flex flex-col justify-center items-center relative z-10 h-full py-12">


            <VerticalTimeline>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(52, 131, 122)', color: '#fff', }}
                contentArrowStyle={{ borderRight: '12px solid rgb(52, 131, 122)' }}

                iconStyle={{ background: '#163381', color: '#fff' }}
                icon={<FaUsers />}
              >
                <div className='flex gap-2 md:gap-5 items-center'>
                  <img src="https://i.ibb.co/vmbxs57/356-3562377-personal-user.png" className='md:w-20 w-14 h-14 md:h-20 text-center rounded-full' alt="" />
                  <span >
                    <p className=''>
                      Hip-hop workshops were a highlight - learned, grooved, and had a blast!
                    </p>
                    <p className="font-bold text-lg flex mb-1 items-center">
                      <span className='mr-1 '>4.3/5</span>  {renderStars(4.3)}
                    </p>
                  </span>
                </div>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(52, 131, 122)', color: '#fff', }}
                contentArrowStyle={{ borderRight: '12px solid  rgb(52, 131, 122)' }}

                iconStyle={{ background: '#163381', color: '#fff' }}
                icon={<FaUsers />}
              >
                <div className='flex gap-5 items-center'>
                  <img src="https://i.ibb.co/Kwd67vS/user.png" className='md:w-20 w-14 h-14 md:h-20 text-center rounded-full' alt="" />
                  <span>
                    <p>
                      The diverse dance styles and passionate instructors made my summer unforgettable.
                    </p>
                    <p className="font-bold text-lg flex mb-1 items-center">
                      <span className='mr-1 '>4.2/5</span>  {renderStars(4.2)}
                    </p>
                  </span>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(52, 131, 122)', color: '#fff', }}
                contentArrowStyle={{ borderRight: '12px solid  rgb(52, 131, 122)' }}

                iconStyle={{ background: '#163381', color: '#fff' }}
                icon={<FaUsers />}
              >
                <div className='flex gap-5 items-center justify-center'>

                  <img src="https://i.ibb.co/m8sKXPW/user-m.png" className='md:w-20 w-14 h-14 md:h-20 text-center rounded-full' alt="" />


                  <span>
                    <p>
                      Dance World Summer School transformed me from a beginner to a confident dancer
                    </p>
                    <p className="font-bold text-lg flex mb-1 items-center">
                      <span className='mr-1 '>4.5/5</span>  {renderStars(4.5)}
                    </p>
                  </span>
                </div>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(52, 131, 122)', color: '#fff', }}
                contentArrowStyle={{ borderRight: '12px solid  rgb(52, 131, 122)' }}

                iconStyle={{ background: '#163381', color: '#fff' }}
                icon={<FaUsers />}

              >
                <div className='flex gap-5 items-center'>
                  <img src="https://i.ibb.co/X5Zdcgp/man.png" className='md:w-20 w-14 h-14 md:h-20 text-center rounded-full' alt="" />
                  <span>
                    <p>
                    A dance paradise where I met lifelong friends and honed my passion.
                    </p>
                    <p className="font-bold text-lg flex mb-1 items-center">
                      <span className='mr-1 '>4.6/5</span>  {renderStars(4.6)}
                    </p>
                  </span>
                </div>
              </VerticalTimelineElement>

            </VerticalTimeline>

          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default About;