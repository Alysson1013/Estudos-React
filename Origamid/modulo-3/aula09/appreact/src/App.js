import React from 'react';
import useLocalStorage from "./useLocalStorage"

const  App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '')

  const handleclick = event => setProduto(event.target.innerText)

  return (
    <div>
      <h1> 
        {produto}
      </h1>
      <button onClick={handleclick}>
        Notebook
      </button>
      <button onClick={handleclick}>
        Smartphone
      </button>
    </div>
  );
}

export default App;
 