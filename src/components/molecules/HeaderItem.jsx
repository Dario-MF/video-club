import React from 'react'

const HeaderItem = ({ title, description, image, active }) => (
    <div className={`carousel-item ${active}`} style={{ height: 60 + "vh" }}>

        <img src={`https://image.tmdb.org/t/p/w500${image}`} className="d-block" alt={`imagen pelicula ${title}`} />

        <div className="carousel-caption text-left d-block ">
            <p className='titulo-header'>{title}</p>
            <p className='descripcion-header'>{description}</p>
        </div>
    </div>
)


export default HeaderItem