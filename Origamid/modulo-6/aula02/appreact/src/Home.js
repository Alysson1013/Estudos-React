import React from 'react'
import { Link } from 'react-router-dom'
import Produto from './Produto'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <p>Essa é a home</p>
            <Link to={"produto/notebook"}>Notebook</Link>
            <Link to={"produto/notebook"}>Smartphone</Link>
        </div>
    )
}

export default Home
