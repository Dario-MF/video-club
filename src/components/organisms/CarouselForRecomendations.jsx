import React, {useEffect} from 'react'
import whithLoader from '../HOC/withLoader'
import FilmCard from '../molecules/FilmCard'
import carouselJs from '../customHooks/carouselJs'

const CarouselForRecomendations = ({films, id}) => {
    useEffect(()=>carouselJs(id),[])  

    return (
        <div className="peliculas-recomendadas contenedor">
            <div className="contenedor-titulo-controles">
                <h3>{`Genero: Recomendadas`}</h3>

            </div>

            <div className="contenedor-principal">
                <button role="button" id={`flecha-izquierda${id}`} className="flecha-izquierda"><i className="fas fa-angle-left"></i></button>

                <div className={`contenedor-carousel`} id={`move${id}`}>
                    <div className="carousel">
                        
                               {films.results.map(c =>(
                                    <FilmCard 
                                            key={c.id}
                                            film={c}
                                    />
                                )) }
                        
                    </div>
                </div>

                <button role="button" id={`flecha-derecha${id}`} className="flecha-derecha"><i className="fas fa-angle-right"></i></button>
            </div>
        </div>
    )
}

export default whithLoader('films')(CarouselForRecomendations) 
