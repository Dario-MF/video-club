import React from 'react'
import { Link } from 'react-router-dom'
import whithLoader from '../HOC/whithLoader'

const FilmCard = ({film})=>{
    return(
        <div className="pelicula">
            <Link to={`/${String(film.id)}`}><img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt="" /></Link>
        </div>
    )
}

export default whithLoader('film')(FilmCard)