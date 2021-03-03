import React from 'react';
import Produto from './Produto';

const  App = () => {
    let [dados, setDados] = React.useState(null)  
    let [obj, setObj] = React.useState({})
    let preferecia = localStorage.getItem('preferecia')

    React.useEffect(async () => {
      let response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/notebook`)
      let json = await response.json()
      obj.notebook = json

      response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/smartphone`)
      let json2 = await response.json()
      obj.smartphone = json2

      setObj({
        notebook: json,
        smartphone: json2
      })

      if (preferecia != null && preferecia != undefined){
        setDados(obj[preferecia])
      }

    }, [])

    function handleclick(event){
      setDados(obj[event.target.innerText])
      localStorage.setItem("preferecia", obj[event.target.innerText].id)
    }

  return (
    <div>
      <h1>
        Prefenrecia: {dados && dados.nome}
      </h1>
      <button onClick={handleclick}>notebook</button>
      <button onClick={handleclick}>smartphone</button>
      {dados && <Produto dados={dados} />}
    </div>
  );
}

export default App;
 