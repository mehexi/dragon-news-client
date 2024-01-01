import React, { useState } from 'react';

const CatagoryItem = (props) => {
    const { id, name } = props.item
    const [active, setActive] = useState(false)
    
    const handleActive = () => {
        setActive(!active);
        console.log('clicked', id)
    }
 

    return (
        <button onClick={handleActive} className={`w-full py-3 hover:bg-gray-200 text-start rounded px-6 border-b ${active ? 'bg-black': ''}`}>
            <h1>{name}</h1>
        </button>
    );
};

export default CatagoryItem;