import React from 'react';
import './POPOSSpace.css'

function POPOSSpace(props) {
    const { name, image, address, hours } = props
    return (
        <div>
            <h1 className='name'>{name}</h1>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
            width="300" 
            height="300" 
            alt="" 
            />
            <div className='address'>{address}</div>
            <div className='name'>{hours}</div>
        </div>
    )
}

export default POPOSSpace