import React, { useEffect, useState } from 'react'
import FilmInfo from '../organisms/FilmInfo'

const Film = ({match})=>{
    const [film, setFilm]= useState([])
    const [video, setVideo]= useState('')


    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=10550aae3c031f97d84a3b1c496994f5&language=es&include_video=true`)
            .then(response => response.json())
            .then(response => {
                setFilm(response)
            })
        fetch(`https://api.themoviedb.org/3/movie/${match.params.id}/videos?api_key=10550aae3c031f97d84a3b1c496994f5&language=en-US`)
            .then(response => response.json())
            .then(response => {
                 setVideo(response.results[0].key)  
            })
    }, [])


    return (<FilmInfo film={film} video={video}/>)
    
}
    


export default Film