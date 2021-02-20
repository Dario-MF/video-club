import React from 'react'


const SearchBar =() =>(
    <form className="search-bar">
        <input className="search-input" type="search" placeholder="Buscar" />
        <button className="search-button" type="submit">Buscar</button>
    </form>
)

export default SearchBar