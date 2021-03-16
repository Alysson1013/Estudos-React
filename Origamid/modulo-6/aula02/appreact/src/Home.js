import React from 'react'
import { Link } from 'react-router-dom'
import Produto from './Produto'
//import Head from './Head'
import {Helmet} from 'react-helmet'

const Home = () => {
    return (
        <div>
            {/* <Head title="Titulo" description="Essa é a descrição da minha home" /> */}
            <Helmet>
                <title>
                    Dogs | Home
                </title>
                <meta name="description" content="Essa é descrição da home" />
            </Helmet>
            <h1>Home</h1>
            <p>Essa é a home</p>
            <Link to={"produto/notebook"}>Notebook</Link>
            <Link to={"produto/smartphone"}>Smartphone</Link>
        </div>
    )
}

export default Home
