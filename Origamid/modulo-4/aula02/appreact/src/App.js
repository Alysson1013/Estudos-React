import React from 'react';

const  App = () => {
  const [textarea, setTextarea] = React.useState('')
  const [select, setSelect] = React.useState('')

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
      {select}
    </form>
  );
}

export default App;
 