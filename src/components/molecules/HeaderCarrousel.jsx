import React, { useEffect, useState } from 'react'
import HeaderItem from '../molecules/HeaderItem'
import carouselJs from '../hooks/carouselJs'

const HeaderCarrousel = ({ filmsHeader }) => {
   
    const filmsSelect = filmsHeader.slice(0, 3)

    useEffect(()=>{
        carouselJs('')
    },[])

    return (
        <div id="carouselControls" className="carousel-header">
            <button role="button" id={`flecha-izquierda`} className="flecha-izquierda"><i className="fas fa-angle-left"></i></button>
            <div className="carousel-inner" id={`move`}>
                <div className="carousel">
                    {
                    filmsSelect.map(i => (
                        <HeaderItem
                            key={i.id}
                            title={i.title}
                            description={i.overview}
                            image={i.backdrop_path}
                        />
                    ))}
                </div>  
            </div>
            <button role="button" id={`flecha-derecha`} className="flecha-derecha"><i className="fas fa-angle-right"></i></button> 
        </div>
    )
}

export default HeaderCarrousel