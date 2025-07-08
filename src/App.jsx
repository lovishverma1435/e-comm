import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import ScrollToTop from './component/Common/ScrollToTop';
import Home from './pages/Home';
import Bags from './pages/Bags';
import Sneakers from './pages/Sneakers';
import Belt from './pages/Belt';
import Contect from './pages/Contect';
import Hotdeal from './component/Hotdeal/Hotdeal';
import Header from './component/Common/Header';
import Footer from './component/Common/Footer';
import './App.css'
import Product from './component/product/Product';
import Cart from './component/cart/Cart';
import Login from "./component/signup/login"
import Signup from './component/signup/signup';


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Bags' element={<Bags />} />
        <Route path='/Sneakers' element={<Sneakers />} />
        <Route path='/Belt' element={<Belt />} />
        <Route path='/Contect' element={<Contect />} />
        <Route path='/Hotdeal' element={<Hotdeal />} />
        <Route path='/product/:id' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </AnimatePresence>
  );  
};

const App = () => {
  return (
    <>
        <Router>
          <ScrollToTop />
          <Header />
          <AnimatedRoutes />
          <Footer />
        </Router>
    </>
  );
};

export default App;
