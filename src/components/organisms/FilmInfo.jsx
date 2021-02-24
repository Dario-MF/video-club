import React from 'react'
import withLoader from '../HOC/withLoader';
import { Link } from 'react-router-dom'


const FilmInfo = ({film})=>{


        return (       
                <div className='info-film'>
                    <div className="box-img">
                        <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title}/>
                    </div>
                    <div className="box-info">
                        <h2 className='info-title'>{film.title}</h2>
                        <p className="info-description"><cite>{`${film.tagline}`}</cite></p>
                        <p className="info-description">{film.overview}</p>
                        <p className="info-description">
                           <span>Genero: </span>{film.genres.map(g => (
                                <Link to={`/genre/${g.name}`} key={g.id}>{g.name}, </Link>
                                
                                ))} 
                        </p>
                        
                        <p className="info-description"><span>Fecha de estreno:</span>{` ${film.release_date}`}</p>
                        <p className="info-description">
                            <span>Producida:</span>{ `${film.production_companies.map(p => ' ' + p.name)}.`
                        }</p>
                        <p className="info-description vote-average">Puntuacion TmDb: <span>{film.vote_average}</span></p>
                    </div>
                </div>
        )
}

export default withLoader('film')(FilmInfo)