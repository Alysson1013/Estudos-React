import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import Header from './Header'
import NaoEncotrada from './NaoEncontrada'

const  App = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NaoEncotrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 