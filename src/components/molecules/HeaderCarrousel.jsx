import React, { useEffect, useState } from 'react'
import HeaderItem from '../molecules/HeaderItem'
import carouselJs from '../customHooks/carouselJs'
import WithLoader from '../HOC/withLoader'

const HeaderCarrousel = ({ filmsHeader }) => {
   
    const filmsSelect = filmsHeader.results.slice(0, 3)
    
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
                            id={i.id}
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

export default WithLoader('filmsHeader')( HeaderCarrousel)