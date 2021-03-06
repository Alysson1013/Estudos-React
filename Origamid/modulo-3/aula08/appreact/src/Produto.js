import React from 'react'
import {GlobalContext} from './GlobalContext'

const Produto = () => {
    const global = React.useContext(GlobalContext)

    return (
        <div>
            <h1>
                Produto: {global.contar}
                <br />
                <button onClick={() => global.adicionarDois()}>
                    Adicionar
                </button>
            </h1>
        </div>
    )
}

export default Produto
