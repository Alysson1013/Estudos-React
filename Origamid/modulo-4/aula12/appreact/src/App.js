import React from 'react';
import Input from './form/Input'
import useForm from './Hooks/useForm'

const  App = () => {
  const cep = useForm('cep');
  const email = useForm('email')
  const nome = useForm()
  const sobrenome = useForm()

  console.log(cep)
  function handleSubmit(event){
    event.preventDefault()
    if (cep.validate() && email.validate() && nome.validate() && sobrenome.validate()){
      console.log("FOi")
    }else{
      console.log("Não foi")
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <Input 
        label="Nome" 
        id="nome" 
        type="text" 
        {...nome}
      />
      <Input 
        label="Sobrenome" 
        id="sobrenome" 
        type="text" 
        {...sobrenome}
      />
      <Input 
        label="CEP" 
        id="cep" 
        type="text" 
        placeholder="00000-000" 
        {...cep}
      />
      <Input 
        label="Email" 
        id="email" 
        type="email" 
        placeholder="example@email.com" 
        {...email}
      />
      <br />
      <button>
        Enviar
      </button>
    </form>
    
  );
}

export default App;
 