import React from 'react';

import Benner from '../../../Components/Benner/Benner';
import PerformanceVideos from '../../../Components/VideoSection/PerfomanceVideos';
import PopulerClass from '../../../Components/PopulerClass/PopulerClass';
import InstractorMain from '../../../Components/PopulerInstractors/InstractorMain';
import ExtraSection from '../../../Components/ExtraSection/ExtraSection';
import Newsection from '../../../Components/NewSection/Newsection';
import FreeSection from '../../../Components/FreeSection/FreeSection';
import About from '../../../Components/About/About';


const HomePage = () => {
   return (
      <div>
         <Benner></Benner>
       
         <PopulerClass></PopulerClass>
         <ExtraSection></ExtraSection>
         <InstractorMain></InstractorMain>
         <Newsection></Newsection>
         <PerformanceVideos></PerformanceVideos>
         <About></About>
         <FreeSection></FreeSection>
      </div>
   );
};

export default HomePage;