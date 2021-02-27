import React from 'react'

const Produto = ({nome, propriedades}) => {
    return (
        <div style={{border: "1px solid", margin: "1rem 0", padding: "1rem"}}>
            <h1>{nome}</h1>
            {propriedades.map(propriedade => (
                <li key={nome}>{propriedade}</li>
            ))}
        </div>
    )
}

export default Produto
