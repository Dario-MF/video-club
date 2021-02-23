import React from 'react'
import { Link } from 'react-router-dom'

const HeaderItem = ({ id, title, description, image }) => (
    <div className={`carousel-header-item`}>

        <Link to={`/${String(id)}`}>
            <img src={`https://image.tmdb.org/t/p/w500${image}`} className="header-img" alt={`imagen pelicula ${title}`} />
        </Link>
        
        <div className="header-caption ">
            <h2 className='header-title'>{title}</h2>
            <p className='header-description'>{description}</p>
        </div>
    </div>
)


export default HeaderItem