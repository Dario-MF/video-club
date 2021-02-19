import React, { useEffect, useState } from 'react'
import carouselJs from '../hooks/carouselJs'

const CarouselForGenre = ({ id, genre }) => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        carouselJs()
    }, [])

    console.log(genre)
    return (
        <div class="peliculas-recomendadas contenedor">
            <div class="contenedor-titulo-controles">
                <h3>{`Genero: ${genre}`}</h3>

            </div>

            <div class="contenedor-principal">
                <button role="button" id="flecha-izquierda" class="flecha-izquierda"><i class="fas fa-angle-left"></i></button>

                <div class="contenedor-carousel">
                    <div class="carousel">
                        <div class="pelicula">
                            <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
                        </div>
                        <div class="pelicula">
                            <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
                        </div>
                        <div class="pelicula">
                            <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
                        </div>
                        <div class="pelicula">
                            <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
                        </div>
                        <div class="pelicula">
                            <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
                        </div>
                        <div class="pelicula">
                            <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
                        </div>
                        <div class="pelicula">
                            <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
                        </div>
                        <div class="pelicula">
                            <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
                        </div>
                        <div class="pelicula">
                            <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
                        </div>
                        <div class="pelicula">
                            <a href="#"><img src="https://picsum.photos/200/300" alt="" /></a>
                        </div>
                    </div>
                </div>

                <button role="button" id="flecha-derecha" class="flecha-derecha"><i class="fas fa-angle-right"></i></button>
            </div>
        </div>
    )
}

export default CarouselForGenre