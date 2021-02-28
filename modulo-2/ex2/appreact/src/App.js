import React from 'react';

const  App = () => {
  const dados = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];
  
  const produtos = dados.filter(value => Number(value.preco.replace('R$', '')) > 1500)
  
  return (
    produtos
      .map(({nome, preco, cores}) => (
        <div>
          <h1 key={nome}>{nome}</h1>
          <p>{preco}</p>
          <ul>
            {cores.map(value => (
              <li key={value} style={{backgroundColor: value, listStyleType: 'none', color: 'white'}}>{value}</li>
            ))}
          </ul>
        </div>
      ))
  );
}

export default App;
