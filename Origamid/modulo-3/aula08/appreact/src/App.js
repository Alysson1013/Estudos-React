import React from 'react';
import { GlobalStorage } from './GlobalContext';
import Produto from './Produto';
import UserContext from './UserContext'


const  App = () => {  
  return (
    <div>
      <GlobalStorage>
        <Produto />
      </GlobalStorage>
    </div>
  );
}

export default App;
 