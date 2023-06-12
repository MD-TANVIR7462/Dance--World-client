import React from 'react';

import Benner from '../../../Components/Benner/Benner';
import PerformanceVideos from '../../../Components/VideoSection/PerfomanceVideos';
import PopulerClass from '../../../Components/PopulerClass/PopulerClass';
import InstractorMain from '../../../Components/PopulerInstractors/InstractorMain';
import ExtraSection from '../../../Components/ExtraSection/ExtraSection';


const HomePage = () => {
   return (
      <div>
         <Benner></Benner>
         <PopulerClass></PopulerClass>
         <ExtraSection></ExtraSection>
         <InstractorMain></InstractorMain>
         <PerformanceVideos></PerformanceVideos>
      </div>
   );
};

export default HomePage;