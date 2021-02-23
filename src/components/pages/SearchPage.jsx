import React from 'react'
import NavBar from '../organisms/NavBar'
import SearchGrid from '../organisms/SearchGrid'
import useFetch from '../customHooks/useFetch'
import Api from '../../data/dataApi'


const SearchPage = ({match}) => {
    
    const searchFilms = useFetch(`https://api.themoviedb.org/3/search/movie?api_key=${Api.apiKey}&language=es-US&query=${match.params.search_word}&page=1&include_adult=false`, [])
    

    return (
        <>
            <NavBar />,
            <SearchGrid 
                wordsSearch={match.params.search_word} 
                searchFilms={searchFilms.data}/>

        </>
    )
}

export default SearchPage
