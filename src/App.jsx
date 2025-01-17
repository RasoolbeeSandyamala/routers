
import React from 'react';
import Navbar from "./Navbar";


import { Route, Routes } from "react-router-dom";
import Menu from './Menu';
import About from './About';
import Location from './Location'
import Contact from './Contact';
import Errorpage from './Errorpage';
import Products from './Products';
const App = () => {
 
  return (
    <>
      <Navbar />

      <Routes>
       <Route path="/" element={< Products />} />
      <Route path="/menu" element={< Menu />} />
      <Route path="/location" element={< Location />} />
      <Route path="/about" element={< About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<Errorpage />} />
      
     </Routes>
    
    </>
  );
};

export default App;
