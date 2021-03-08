import React from 'react';

const  App = () => {
  const [textarea, setTextarea] = React.useState('')
  const [select, setSelect] = React.useState('')
  const [produto, setProduto] = React.useState('')

  function handleChange({target}){
    setProduto(target.value)
  }

  return (
    <form>
      <textarea
        value={textarea}
        onChange={(({target}) => setTextarea(target.value))}
        rows="5"
      />
      <select value={select} id="produtos" onChange={({target}) => setSelect(target.value)}>
        <option disabled value="">Selecione</option>
        <option value="notebook">Notebook</option>
        <option value="smartphone">Smartphone</option>
        <option value="tablet">Tablet</option>
      </select>
      <label>
        <input type="radio" name="produto" value="smartphone" onChange={handleChange} checked={produto === 'smartphone'} />
        Smartphone
      </label>
      <label>
        <input type="radio" name="produto" value="notebook" onChange={handleChange} checked={produto === 'notebook'} />
        Notebook
      </label>
      {produto}
    </form>
  );
}

export default App;
 