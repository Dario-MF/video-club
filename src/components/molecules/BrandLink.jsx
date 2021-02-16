import React from 'react'
import logo from '../../img/logo.svg'



const BrandLink = () => (
    <a className="navbar-brand text-light" href="#">
        <img src={logo} alt="logo empresa" width="50" height="50" className="d-inline-block align-center mr-2" />
        Video Club
    </a>
)


export default BrandLink