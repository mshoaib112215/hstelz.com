import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import PropertyDetails from './pages/PropertyDetails'
import Home from './pages/Home'
import Reviews from './pages/Reviews';

const App = () => {
  return(
    <div className='max-w-[1440px] mx-auto bg-[#f4f4f4]'>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/property/:id' element = {<PropertyDetails/>}/>
        <Route path = '/reviews/:id' element = {<Reviews/>}/>
        
        
      </Routes>
      <Footer/>
    </div>
  )
};

export default App;
