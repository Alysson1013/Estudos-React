import React from 'react'

const Checkbox = ({options, value, setValue}) => {
    function handleChange({target}){
        if (target.checked){
            setValue([...value, target.value])
        } else {
            setValue(value.filter(itemValue => itemValue !== target.value))
        }
    }

    return (
        <React.Fragment>
            {options.map(option => (
                <label key={option}>
                    <input type="checkbox" value={option} onChange={handleChange} checked={value.includes(option)}/>
                    {option}
                </label>
            ))}
        </React.Fragment>
    )
}

export default Checkbox
