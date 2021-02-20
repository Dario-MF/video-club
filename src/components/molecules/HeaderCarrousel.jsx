import React, { useEffect, useState } from 'react'
import HeaderItem from '../molecules/HeaderItem'

const HeaderCarrousel = ({ filmsHeader }) => {
    const filmsSelect1 = filmsHeader.slice(0, 1)
    const filmsSelect = filmsHeader.slice(1, 3)


    return (
        <div id="carouselControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {
                    filmsSelect1.map(i => (
                        <HeaderItem
                            key={i.id}
                            title={i.title}
                            description={i.overview}
                            image={i.backdrop_path}
                            active='active'
                        />
                    ))}
                {
                    filmsSelect.map(i => (
                        <HeaderItem
                            key={i.id}
                            title={i.title}
                            description={i.overview}
                            image={i.backdrop_path}
                            active=''
                        />
                    ))}

            </div>
            <a className="carousel-control-prev" type="button" href="#carouselControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>

            </a>
            <a className="carousel-control-next" type="button" href="#carouselControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>

            </a>
        </div>
    )
}

export default HeaderCarrousel