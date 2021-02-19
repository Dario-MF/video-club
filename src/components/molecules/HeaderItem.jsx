import React from 'react'

const HeaderItem = ({ title, description, image, active }) => (
    <div className={`carousel-item ${active}  bg-dark`} style={{ height: 50 + "vh" }}>

        <img src={`https://image.tmdb.org/t/p/w500${image}`} className="d-block w-100 h-100" alt={`imagen pelicula ${title}`} />

        <div className="carousel-caption text-left w-50 d-block overflow-hidden " style={{ height: 50 + "%" }}>
            <h4>{title}</h4>
            <p className='d-block '>{description}</p>
        </div>
    </div>
)


export default HeaderItem