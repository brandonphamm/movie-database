import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import logo from '../../images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src={logo} /></Link>
                <Link to="/movies/now_playing" style={{textDecoration: "none"}}><span>Now Playing</span></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>Upcoming</span></Link>
                <Link to="/favourite" style={{textDecoration: "none"}}><span>Favourites</span></Link>
                <Link to="/about" style={{textDecoration: "none"}}><span>About</span></Link>
                
            </div>
        </div>
    )
}

export default Header