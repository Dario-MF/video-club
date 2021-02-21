import React, { useEffect, useState } from 'react'
import carouselJs from '../hooks/carouselJs'
import FilmCard from '../molecules/FilmCard'

const CarouselForGenre = ({ id, genre }) => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=10550aae3c031f97d84a3b1c496994f5&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`)
            .then(response => response.json())
            .then(response => {
                setFilms(response.results)
            })
        carouselJs(id)
        
    }, [])

   
    return (
        <div className="peliculas-recomendadas contenedor">
            <div className="contenedor-titulo-controles">
                <h3>{`Genero: ${genre}`}</h3>

            </div>

            <div className="contenedor-principal">
                <button role="button" id={`flecha-izquierda${id}`} className="flecha-izquierda"><i className="fas fa-angle-left"></i></button>

                <div className={`contenedor-carousel`} id={`move${id}`}>
                    <div className="carousel">
                        {
                           films.map(c =>(
                               <FilmCard 
                                    key={c.id}
                                    film={c}
                               />
                           )) 
                        }
                    </div>
                </div>

                <button role="button" id={`flecha-derecha${id}`} className="flecha-derecha"><i className="fas fa-angle-right"></i></button>
            </div>
        </div>
    )
}

export default CarouselForGenre