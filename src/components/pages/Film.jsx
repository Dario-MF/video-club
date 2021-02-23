import React from 'react'
import FilmInfo from '../organisms/FilmInfo'
import useFetch from '../customHooks/useFetch'
import Api from '../../data/dataApi'

const Film = ({match})=>{
    
    const film = useFetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${Api.apiKey}&language=es&include_video=true`, [])
    const video = useFetch(`https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=${Api.apiKey}&language=en-US`, [])
   

    return (<FilmInfo film={film.data} films={'hola'} video={video.data}/>)    
}
    


export default Film