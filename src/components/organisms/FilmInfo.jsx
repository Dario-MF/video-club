import React from 'react'

const FilmInfo = ({film, video})=>{
    
   
   
    if (!film.title) {
        return <span>Loading...</span>;
    }else{
        return (
            <>
                <div className='info-film' style={{color: 'white'}}>
                    <div className="box-img">
                        <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt={film.title}/>
                    </div>
                    <div className="box-info">
                        <h2 className='info-title'>{film.title}</h2>
                        <p className="info-description">{`${film.tagline}`}</p>
                        <p className="info-description">{film.overview}</p>
                        <p className="info-description">{
                            `Genero: ${film.genres[0].name}, ${film.genres[1].name}`
                        }</p>
                        
                        <p className="info-description">{`Fecha de estreno: ${film.release_date}`}</p>
                        <p className="info-description">{
                            `Producida: ${film.production_companies[0].name}`
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
   
    
}

export default FilmInfo