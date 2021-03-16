import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Sobre from './Sobre'
import Header from './Header'
import NaoEncotrada from './NaoEncontrada'
import Login from './Login'
import Produto from './Produto';
import ProdutoAvaliacao from './ProdutoAvaliacao'
import ProdutoCostumizado from './ProdutoCostumizado'
import ProdutoDescricao from './ProdutoDescricao'

const  App = () => {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="login" element={<Login />} />
        <Route path="produto/:id/" element={<Produto />}>
                <Route path="/" element={<ProdutoDescricao />} />
                <Route path="avaliacao" element={<ProdutoAvaliacao />} />
                <Route path="customizado" element={<ProdutoCostumizado />} />
        </Route>
        <Route path="*" element={<NaoEncotrada />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
 