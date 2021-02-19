import React, { useEffect, useState } from 'react'
import genres from '../../data/genres'
import CarouselForGenre from './CarouselForGenre'

const CarouselGenres = () => {

    return (
        genres.map(g => (
            <CarouselForGenre
                key={g.id}
                id={g.id}
                genre={g.name}
            />
        ))
    )







}

export default CarouselGenres

