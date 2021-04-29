import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LoginForm from './LoginForm';
import LoginCreate from './LoginCreate';
import LoginPasswordReset from './LoginPasswordReset';
import LoginPasswordLost from './LoginPasswordLost'

const Login = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="criar" element={<LoginCreate />} />
                <Route path="perdeu" element={<LoginPasswordReset />} />
                <Route path="resetar" element={<LoginPasswordLost />} />
            </Routes>
        </div>
    )
}

export default Login
