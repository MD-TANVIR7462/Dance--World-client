import React from 'react';

import Benner from '../../../Components/Benner/Benner';
import PerformanceVideos from '../../../Components/VideoSection/PerfomanceVideos';
import PopulerClass from '../../../Components/PopulerClass/PopulerClass';
import InstractorMain from '../../../Components/PopulerInstractors/InstractorMain';

const HomePage = () => {
   return (
      <div>
         <Benner></Benner>
         <PopulerClass></PopulerClass>
         <InstractorMain></InstractorMain>
         <PerformanceVideos></PerformanceVideos>
      </div>
   );
};

export default HomePage;