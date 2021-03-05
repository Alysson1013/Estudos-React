import React from 'react';


const gastouDemais = total => {
  if (total > 10000) return "Você está gastando muito"
}
const  App = () => {
  let sup = {}
  const luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: "R$ 1500" }
    ],
    ativa: true
  }
  const mario = {
    cliente: 'Mario',
    idade: 31, 
    compras: [
      { nome: 'Notebook', preco: "R$ 2500" },
      { nome: 'Geladeira', preco: "R$ 3000"},
      { nome: 'Smartphone', preco: "R$ 1500" },
      { nome: 'Guitarra', preco: "R$ 3500"}
    ],
    ativo: false
  } 
  const dados = mario
  var total = dados.compras
    .map(value => Number(value.preco.substr(3)))
    .reduce((acum, value) => acum + value)
  
  if (dados.ativa) sup = { texto: 'Ativo', color: 'green' }
  else sup = { texto: 'Inativo', color: 'red' }
  const ui = <div> 
    <p> Nome: {dados['cliente']} </p>
    <p> Idade: {dados['idade']} </p>
    <p> Situação: <span style={{color: sup.color}}> {sup.texto} </span></p>
    <p> Total Gasto: { total }</p>
    <p> { gastouDemais(total) } </p>
  </div>
  return (
    ui
  );
}

export default App;
