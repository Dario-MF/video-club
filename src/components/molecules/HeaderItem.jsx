import React from 'react'

const HeaderItem = ({ title, description, image }) => (
    <div className={`carousel-header-item`}>
        
        <img src={`https://image.tmdb.org/t/p/w500${image}`} className="header-img" alt={`imagen pelicula ${title}`} />

        <div className="header-caption ">
            <h2 className='header-title'>{title}</h2>
            <p className='header-description'>{description}</p>
        </div>
    </div>
)


export default HeaderItem