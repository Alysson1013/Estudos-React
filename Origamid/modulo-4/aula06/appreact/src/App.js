import React from 'react';

const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const  App = () => {
  const [cores, setCores] = React.useState(['vermelho'])

  function handleChange({target}){
    if (target.checked){
      setCores([...cores, target.value])
    } else {
      setCores(cores.filter(cor => cor != target.value))
    }
  }

  const checkColor = cor => cores.includes(cor)

  return (
    <form>
      {coresArray.map(cor => (
        <label key={cor}>
        <input 
          type="checkbox"
          value= {cor}
          checked={checkColor(cor)}
          onChange={handleChange}
        />
        {cor}
      </label>
      ))}
    </form>
    
  );
}

export default App;
 