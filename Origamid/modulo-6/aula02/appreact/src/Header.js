import React from 'react'
import {NavLink, useLocation} from 'react-router-dom'
//import './Header.css'

const Home = () => {

    const location = useLocation()

    React.useEffect(()=>{
        console.log('Mudou de rota')
    }, [location])

    return (
        <nav>
            <NavLink to="/" activeStyle={{ color: 'tomato' }} end>
                Home
            </NavLink> {' '}
            | 
            <NavLink activeStyle={{ color: 'tomato' }} to="sobre">
                Sobre
            </NavLink>
            |
            <NavLink activeStyle={{ color: 'tomato' }} to="login">
                Login
            </NavLink>
        </nav>
    )
}

export default Home
