import React from 'react';

const Dropdown = ( {options, defaultValue, setValue} ) => {

    return (
        <div>
            <select defaultValue={defaultValue} onChange={(e) => setValue(e.target.value)}>
                {options.map(item => {
                    return <option key={item.value} value={item.value}>{item.label}</option>
                })}
            </select>

        </div>
    );
};

export default Dropdown;