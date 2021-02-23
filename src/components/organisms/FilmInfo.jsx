import React from 'react'
import whithLoader from '../HOC/whithLoader';

const FilmInfo = ({film, video})=>{
    
    
        return (
            <>
                <div className='info-film'>
                    <div className="box-img">
                        <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title}/>
                    </div>
                    <div className="box-info">
                        <h2 className='info-title'>{film.title}</h2>
                        <p className="info-description"><cite>{`${film.tagline}`}</cite></p>
                        <p className="info-description">{film.overview}</p>
                        <p className="info-description">
                           <span>Genero: </span>{` ${film.genres.map(g => ' ' + g.name)}.`
                        }</p>
                        
                        <p className="info-description"><span>Fecha de estreno:</span>{` ${film.release_date}`}</p>
                        <p className="info-description">
                            <span>Producida:</span>{ `${film.production_companies.map(p => ' ' + p.name)}.`
                        }</p>
                        <p className="info-description vote-average">Puntuacion TmDb: <span>{film.vote_average}</span></p>
                    </div>
                </div>
                <div className="box-video">
                    <h2>Ver trailer</h2>
                    <div className="video-responsive">
                        <iframe 
                            src={`https://www.youtube.com/embed/${video}`} 
                            frameBorder="0"
                            allowFullScreen="allowfullscreen">
                        </iframe>
                    </div>
                </div>
            </>
            
        )
    
   
    
}

export default whithLoader('film')(FilmInfo)