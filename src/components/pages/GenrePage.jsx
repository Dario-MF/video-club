import React from 'react'
import NavBar from '../organisms/NavBar'
import useFetch from '../customHooks/useFetch'
import Api from '../../data/dataApi'
import SearchGrid from '../organisms/SearchGrid'
import genres from '../../data/genres'



const GenrePage = ({match}) => {
    const genreId = genres.filter(g => g.name == match.params.genre_id)[0].id
    const title = `Películas de ${match.params.genre_id}` 

    const searchFilms = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${Api.apiKey}&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genreId}`, [])
    
    return (
        <>
            <NavBar />,
            <SearchGrid
                title={title} 
                searchFilms={searchFilms.data}
            />
        </>
    )
}


export default GenrePage
