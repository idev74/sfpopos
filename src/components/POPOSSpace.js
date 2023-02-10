import React from 'react';
import "./POPOSSpace.css"

function POPOSSpace(props) {
    const { name, image, address } = props
    return (
        <div>
            <h1>{name}</h1>
            <img src={`${process.env.PUBLIC_URL}/${image}`} 
            width="300" 
            height="300" 
            alt="" 
            />
            <div>{address}</div>
        </div>
    )
}

export default POPOSSpace