import React from 'react'
import { useLocation, useParams, Route, Routes, Outlet } from 'react-router'
import { NavLink } from 'react-router-dom'

const Produto = () => {
    const params = useParams()
    const location = useLocation()
    
    const search = new URLSearchParams(location.search)
    console.log(search.get('q'))

    return (
        <div>
            <h1>Produto: {params.id}</h1>
            <nav>
                <NavLink to="">
                    Descrição
                </NavLink>
                <NavLink to="avaliacao">
                    Avaliação
                </NavLink>
                <NavLink to="customizado">
                    Customizado
                </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Produto
