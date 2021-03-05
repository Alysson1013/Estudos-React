import React from 'react';
import Produto from './Produto';

const  App = () => {
  const [produto, setProduto] = React.useState(null)

  React.useEffect(()=>{
    const produtoLocal = window.localStorage.getItem('produto')
    if (produtoLocal != null) setProduto(produtoLocal)
  }, [])

  React.useEffect(()=>{
    if(produto != null) window.localStorage.setItem('produto', produto)
  }, [produto])
  //O useEffect vai ser chamado sempre que produto for alterado.

  function handleClick(event){
    setProduto(event.target.innerText)
  }

  return(
    <div>
      <h1>
        Preferencia: {produto}
      </h1>
      <button onClick={handleClick} style={{marginRight: '1rem'}}>
        Notebook
      </button>
      <button onClick={handleClick}style={{marginRight: '1rem'}}>
        Smartphone
      </button>
      <Produto produto={produto} />
    </div>
  )
}

export default App;
 