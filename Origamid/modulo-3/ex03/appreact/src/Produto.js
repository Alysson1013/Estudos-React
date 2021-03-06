import React from 'react'
import {GlobalContext} from './GlobalContext'

const Produto = () => {
    const {dados} = React.useContext(GlobalContext)
    if(dados == null) return null
    return (
        <div>
            <ul>    
                {dados.map(dado => <li key={dado.id}>{dado.nome}</li>)}
            </ul>
        </div>
    )
}

export default Produto
