import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from "./component/navbar/Navbar.jsx";
import Home from './pages/home/Home.jsx';
import Info from './pages/info/Info.jsx';
import Calculate from './pages/calculate/Calculate.jsx';
import Footer from './component/footer/Footer.jsx';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer theme="colored"/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/calculate" element={<Calculate />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App