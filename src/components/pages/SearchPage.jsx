import React from 'react'
import NavBar from '../organisms/NavBar'
import SearchGrid from '../organisms/SearchGrid'
import useFetch from '../customHooks/useFetch'
import Api from '../../data/dataApi'


const SearchPage = ({match}) => {
    const word = match.params.search_word
    const title = `Resultados para: ${word}`
    const searchFilms = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=${Api.apiKey}&language=es-US&query=${word}&page=1&include_adult=false`, [])
    

    return (
        <>
            <NavBar />,
            <SearchGrid 
                title={title} 
                searchFilms={searchFilms.data}/>

        </>
    )
}

export default SearchPage
