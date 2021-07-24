import React from 'react'
import { Link } from 'react-router-dom'


const SearchCard = ({id, image, title}) => {
    return (
        
            <div className="search-card">
                <Link to={`/film/${String(id)}`}>
                    <img src={`https://image.tmdb.org/t/p/w500${image}`} className="search-card-img" alt={`imagen pelicula ${title}`} />      
                    
                    <div className="search-card-caption ">
                        <p className='search-card-title'>{title}</p>    
                    </div> 
                </Link>
            </div>
       
    )
}

export default SearchCard
