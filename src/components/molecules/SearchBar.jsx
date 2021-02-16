import React from 'react'


const SearchBar =() =>(
    <form className="d-flex">
        <input className="form-control mr-4" type="search" placeholder="Buscar" aria-label="Search" />
        <button className="btn btn-outline-danger" type="submit">Buscar</button>
    </form>
)

export default SearchBar