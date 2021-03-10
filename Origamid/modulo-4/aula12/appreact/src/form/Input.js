import React from 'react'

const Input = ({id, label, onChange, value, type, onBlur, placeholder, error}) => {
    return (
        <React.Fragment>
            <label htmlFor={id}>{label}</label>
            <input 
                id={id} 
                name={id} 
                onChange={onChange}
                placeholder={placeholder}
                onBlur={onBlur}
                type={type}
                value={value}
            />
            {error && <p>{error}</p>}
        </React.Fragment>
    )
}

export default Input
