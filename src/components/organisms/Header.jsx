import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderCarrousel from '../molecules/HeaderCarrousel'



const Header = () => {
    const [filmsHeader, setFilmsHeader] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=10550aae3c031f97d84a3b1c496994f5&language=es&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28')
            .then(response => response.json())
            .then(response => {
                setFilmsHeader(response.results)
            })
    }, [])

    return <HeaderCarrousel filmsHeader={filmsHeader} />

}





export default Header