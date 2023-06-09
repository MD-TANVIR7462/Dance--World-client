import React from 'react';

import Benner from '../../../Components/Benner/Benner';
import PerformanceVideos from '../../../Components/VideoSection/PerfomanceVideos';
import PopulerClass from '../../../Components/PopulerClass/PopulerClass';

const HomePage = () => {
   return (
      <div>
         <Benner></Benner>
         <PopulerClass></PopulerClass>
         <PerformanceVideos></PerformanceVideos>
      </div>
   );
};

export default HomePage;