import React from 'react';

const Input = ({setter, field, placeholder, value, type}) => {

    return (
        <>
            <input
                onChange={(e) => setter(prev => ({...prev, [field]: e.target.value}))}
                placeholder={placeholder}
                value={value}
                type={type}/>
        </>
    );
};

export default Input;