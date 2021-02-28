import React from 'react';

const  App = () => {

  const [contar, setContar] = React.useState(1)
  const [items, setItems] = React.useState(["Item 1"])

  function handleClick(){
    setContar(contar + 1)
    setItems([...items, `item ${contar + 1}`])
  } 
    
  

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item}>
            {item}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
}

export default App;
 