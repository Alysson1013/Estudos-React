import React from 'react';
import foto from './img/foto.jpg'
import "./App.css"
import DogSvg from './dogSVG'

const  App = () => {


  return (
    <div>
      <p className="fundo">
      
      </p>
      <DogSvg color="#84e" />
      <img src={foto} alt="cachorro"></img>
    </div>
  );
}

export default App;
 