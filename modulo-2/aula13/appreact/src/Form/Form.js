import React from 'react'
import Button from './Button';
import Input from './Input';

const Form = () => {
    return (
        <div>
            <Input id="email" label="Email" required />
            <br />
            <Input id="password" label="Password" />
            <br />
            <Button texto="Clique" />
        </div>
    )
}

export default Form
