import React from 'react';
import styled from 'styled-components'

const ProdutoContainer = styled.div`
  display: flex;
`

const Produto = styled.div`
  flex: 1;
`

const Titulo = styled.h1`
  font-size: 2rem;
  color: tomato;
`

const Paragrafo = styled.p`
  font-size: 1.5rem;
  color: green;
`

const  App = () => {
  

  return (
    <div>
      <ProdutoContainer>
        <Produto>
          <Titulo> Titulo </Titulo>
          <Paragrafo>Meu texto é esse</Paragrafo>
        </Produto>
        <Produto>
          <Titulo> Smartphone </Titulo>
          <Paragrafo>Meu texto é esse</Paragrafo>
        </Produto>
      </ProdutoContainer>
    </div>
  );
}

export default App;
 