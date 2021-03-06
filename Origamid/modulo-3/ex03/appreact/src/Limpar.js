import React, { useContext } from 'react'
import {GlobalContext} from './GlobalContext'

const Limpar = () => {
    const {limpar} = useContext(GlobalContext)
    return (
        <div>
            <button onClick={() => limpar()}>
                Limpar
            </button>
        </div>
    )
}

export default Limpar
