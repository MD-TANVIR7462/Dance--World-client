import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import Benner from './Components/Benner/Benner';
import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer/Footer';

const App = () => {
  return (

   <div>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
   </div>
  );
};

export default App;