import React from 'react'
import { useLocation, useParams } from 'react-router'

const Produto = () => {
    const params = useParams()
    const location = useLocation()
    
    const search = new URLSearchParams(location.search)
    console.log(search.get('q'))

    return (
        <div>
            <h1>Produto</h1>
        </div>
    )
}

export default Produto
