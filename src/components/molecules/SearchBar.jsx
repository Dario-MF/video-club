import React, { useState } from 'react'
import { useHistory } from "react-router-dom";



const SearchBar = () => {

    const [input, setInput]= useState('')
    const history = useHistory()

    const formChange = (event) => {
            event.preventDefault();
            setInput(event.target.value);
        }

    const formSubmit = (event) =>{
            event.preventDefault();
            history.push(`/search/${input}`)
        }

    return (
                <form className="search-bar" >
                    <input className="search-input" type="search" placeholder="Buscar" onChange={formChange} />
                    <button className="search-button"  onClick={formSubmit}>Buscar</button>
                </form>
            )
}




    


    

    







export default SearchBar