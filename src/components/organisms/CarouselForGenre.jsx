import React, {useEffect}from 'react'
import carouselJs from '../customHooks/carouselJs'
import FilmCard from '../molecules/FilmCard'
import useFetch from '../customHooks/useFetch'
import Api from '../../data/dataApi'
import withLoader from '../HOC/withLoader'
import { Link } from 'react-router-dom'



const CarouselForGenre = ({ id, genre }) => {
    
    const films = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${Api.apiKey}&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`, [])

    useEffect(()=>carouselJs(id),[])     
       
    return (
        <div className="peliculas-recomendadas contenedor">
            <div className="contenedor-titulo-controles">
               <Link to={`/genre/${genre}`}><h3>{`Genero ${genre}`}</h3></Link> 

            </div>

            <div className="contenedor-principal">
                <button role="button" id={`flecha-izquierda${id}`} className="flecha-izquierda"><i className="fas fa-angle-left"></i></button>

                <div className={`contenedor-carousel`} id={`move${id}`}>
                    <div className="carousel">
                        {films.data.length === 0
                            ? <h1>Cargando...</h1>
                            :   films.data.results.map(c =>(
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

export default withLoader('genre')( CarouselForGenre)