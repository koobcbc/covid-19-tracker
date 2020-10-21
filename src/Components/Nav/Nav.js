import React from 'react'
import { Link } from "react-router-dom"
import virusLogo from '../../virusLogo'


const Nav = () => {

      
    return(
        <div className ='nav'>
            <div className='title-center'>
                <Link to="/">
                    <img width='40' src={virusLogo} />
                    {/* <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
                    <h1>COVID-19 TRACKER</h1>
                </Link>
            </div>
            <div className='navBar'>
                <ul>
                    <Link to="/"><li>Overview</li></Link>
                    {/* scroll down to searchForm in Main */}
                    {/* check this method later */}
                    <a href="/#searchByState"><li>Search By State</li></a>
                    <Link to="/about"><li>About COVID</li></Link>
                    <Link to="/by-country"><li>By Country</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Nav