import React from 'react';
import Checkbox from './form/Checkbox';
import Input from './form/Input';
import Radio from './form/Radio';
import Select from './form/Select';

const  App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')
  const [cor, setCor] = React.useState('')
  const [linguagens, setLinguagens] = React.useState([])
  const [termos, setTermos] = React.useState([])

  if(termos.length > 0){
    console.log("enviado")
  }
  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <Select options={["Tablet", "Smartphone"]} value={produto} setValue={setProduto} />
      <br />
      <Radio options={["Vermelho", "Azul"]} value={cor} setValue={setCor} />
      <Checkbox options={["Javascript", "PHP", "Ruby"]} value={linguagens} setValue={setLinguagens} />
      <Checkbox options={["Li e aceito os Termos."]} value={termos} setValue={setTermos} />
      <button>
        Enviar
      </button>
    </form>
    
  );
}

export default App;
 