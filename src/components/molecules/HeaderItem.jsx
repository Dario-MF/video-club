import React from 'react'

const HeaderItem = ({ title, description, image, active }) => (
    <div className={`carousel-item ${active}  bg-dark`} style={{ height: 40 + "vh" }}>

        <img src={`https://image.tmdb.org/t/p/w500${image}`} className="d-block w-75  " alt={`imagen pelicula ${title}`} />

        <div className="carousel-caption text-left d-none d-md-block">
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    </div>
)


export default HeaderItem