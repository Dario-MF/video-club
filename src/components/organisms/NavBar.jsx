import React from 'react'
import BrandLink from '../molecules/BrandLink'
import SearchBar from '../molecules/SearchBar'


const Header = () => (
    
    <div className="navigation">
        <nav className="navbar ">   
                <BrandLink />
                <SearchBar  />
        </nav>
    </div>
)



export default Header