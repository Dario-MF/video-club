import React from 'react'
import whithLoader from '../HOC/withLoader'
import SearchCard from '../molecules/SearchCard'


const SearchGrid = ({wordsSearch, searchFilms}) => {

   
    return (
        <div className="search-box">
            <h2 className="search-title">{`Resultados para: ${wordsSearch}`}</h2>
            <div className="search-grid">
                {
                    searchFilms.results.map(f => (
                        <SearchCard 
                            key={f.id}
                            id={f.id}
                            title={f.title}
                            description={f.overview}
                            image={f.poster_path}
                        />
                    ))
                }     
            </div>
        </div>
    )
}

export default whithLoader('searchFilms')(SearchGrid)
