import React from 'react';

import Benner from '../../../Components/Benner/Benner';
import PerformanceVideos from '../../../Components/VideoSection/PerfomanceVideos';
import PopulerClass from '../../../Components/PopulerClass/PopulerClass';
import InstractorMain from '../../../Components/PopulerInstractors/InstractorMain';
import ExtraSection from '../../../Components/ExtraSection/ExtraSection';
import Newsection from '../../../Components/NewSection/Newsection';


const HomePage = () => {
   return (
      <div>
         <Benner></Benner>
         <PopulerClass></PopulerClass>
         <ExtraSection></ExtraSection>
         <InstractorMain></InstractorMain>
         <Newsection></Newsection>
         <PerformanceVideos></PerformanceVideos>
      </div>
   );
};

export default HomePage;