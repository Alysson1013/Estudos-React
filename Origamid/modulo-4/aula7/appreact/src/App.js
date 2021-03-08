import React from 'react';
import Input from './form/Input';
import Select from './form/Select';

const  App = () => {
  const [nome, setNome] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [produto, setProduto] = React.useState('')

  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <Select options={["Tablet", "Smartphone"]} value={produto} setValue={setProduto} />
      <br />
      <button>
        Enviar
      </button>
    </form>
    
  );
}

export default App;
 