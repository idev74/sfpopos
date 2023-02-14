import React from 'react';
import './POPOSSpace.css'
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
    const { name, image, address, hours, id } = props
    return (
        <div className='POPOSSpace'>
            <Link to={`/details/${id}`}>
            <h1 className='name'>{name}
            </h1>
            </Link>
            <Link to={`/details/${id}`}>
            <img src={`${process.env.PUBLIC_URL}/images/${image}`} 
            width="300" 
            height="300" 
            alt="" 
            />
            </Link>
            <div className='POPOSSpace-info'>
            <div className='address'>{address}</div>
            <div className='name'>{hours}</div>
            </div>
        </div>
    )
}

export default POPOSSpace