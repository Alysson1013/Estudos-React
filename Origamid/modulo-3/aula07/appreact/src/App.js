import React from 'react';

function operacaoLenta(){
  let c = 0;
  for(let i=0; i<=10000000; i++){
      c = i + i/10
  }

  return c
}

const  App = () => {
  const [contar, setContar] = React.useState(0)
  const valor = React.useMemo(()=> operacaoLenta(), [])

  const handleClick = React.useCallback(()=> setContar(contar + 1), [contar])

  return (
    <div>
      <button onClick={() => setContar(contar+1)}>{contar}</button>
      <br />
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}

export default App;
 