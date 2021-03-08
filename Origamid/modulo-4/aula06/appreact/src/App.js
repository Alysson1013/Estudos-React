import React from 'react';

const  App = () => {
  const [termos, setTermos] = React.useState(false)
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
      {termos && <p>Aceitou os Termos</p>}
      <label>
        <input type="checkbox" 
          value="Termos" 
          checked={termos} 
          onChange={({target})=> {
            setTermos(target.checked)
          } 
        } />
        Aceito os Termos
      </label>
      <br />
      <label>
        <input 
          type="checkbox"
          value="vermelho"
          checked={checkColor("vermelho")}
          onChange={handleChange}
        />
        Vermelho
      </label>
      <label>
        <input 
          type="checkbox"
          value="azul"
          checked={checkColor('azul')}
          onChange={handleChange}
        />
        Azul
      </label>
    </form>
    
  );
}

export default App;
 