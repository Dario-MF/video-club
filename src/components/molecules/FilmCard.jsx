import React from 'react'

const FilmCard = ({id, image})=>{
    return(
        <div className="pelicula">
            <a href="#"><img src={`https://image.tmdb.org/t/p/w300${image}`} alt="" /></a>
        </div>
    )
}

export default FilmCard