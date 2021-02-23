import React, { useEffect, useState } from 'react'
import HeaderCarrousel from '../molecules/HeaderCarrousel'
import useFetch from '../customHooks/useFetch'
import Api from '../../data/dataApi'



const Header = () => {
    
    const filmsHeader = useFetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${Api.apiKey}&language=es`, [])
     
    return <HeaderCarrousel filmsHeader={filmsHeader.data} />
}


export default Header