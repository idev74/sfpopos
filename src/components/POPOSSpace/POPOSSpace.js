import React from 'react';
import './POPOSSpace.css'
import { Link } from 'react-router-dom'

export default function POPOSSpace(props) {
    const { name, image, address, hours, id } = props
    return (
        <section className='POPOSSpace'>
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
            <section className='POPOSSpace-info'>
            <p className='address'>{address}</p>
            <p className='name'>{hours}</p>
            </section>
        </section>
    )
}
