import React from 'react'
import BrandLink from '../molecules/BrandLink'
import SearchBar from '../molecules/SearchBar'


const Header = ()=>(
    <div role="navigation">
        <nav className="navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <BrandLink />
                <SearchBar />
            </div>
        </nav>
    </div> 
)



export default Header