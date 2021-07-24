import React from 'react'
import NavBar from '../organisms/NavBar'
import FilmInfo from '../organisms/FilmInfo'
import useFetch from '../customHooks/useFetch'
import Api from '../../data/dataApi'
import VideoTriller from '../molecules/VideoTriller'
import CarouselForRecomendations from '../organisms/CarouselForRecomendations'


const Film = ({match})=>{
    const film = useFetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${Api.apiKey}&language=es&include_video=true`, [])
    const video = useFetch(`https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=${Api.apiKey}&language=en-US`, [])
    const recomendations = useFetch(`https://api.themoviedb.org/3/movie/${match.params.id}/recommendations?api_key=${Api.apiKey}&language=es&page=1`, [])

    return (
        <>
            <NavBar />
            <FilmInfo film={film.data}  />
            <VideoTriller video={video.data} />
            <CarouselForRecomendations films={recomendations.data }id={match.params.id} />
            
        </>
    )    
}
    


export default Film