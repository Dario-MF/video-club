import React from 'react'
import logo from '../../img/logo.svg'
import {Link} from 'react-router-dom'



const BrandLink = () => (
    <Link to={'/'} className="navbar-brand">
        <img src={logo} alt="logo empresa" width="50" height="50" />
        Video Club
    </Link>
)


export default BrandLink