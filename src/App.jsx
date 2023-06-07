import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Benner from './Components/Benner/Benner';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (

   <div>
    <NavBar></NavBar>
    <Outlet></Outlet>
   </div>
  );
};

export default App;