import React, { useEffect, useState } from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";
import "./about.css"

const About = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=2384c6978e58ea305f4ac2c6cf02aefc")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    return (
        <>
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
            </div>
            <div className="about-page">
                <h1> About</h1>
                
                <p>Welcome to Screen Surge! This website is powered by The Movie Database (TMDb), which provides a comprehensive collection of movie information.</p>
      <p>Features:</p>
      <ul>
        <li>Browse through a wide range of movies.</li>
        <li>Search for specific movies by title, genre, or year.</li>
        <li>View detailed information about each movie, including cast, crew, plot summary, and more.</li>
        <li>Stay up-to-date with the latest releases and popular movies.</li>
      </ul>
      <p>This movie database is created and maintained by ScreenSurge. If you have any questions or feedback, feel free to contact us.</p>
      <p>Explore our <Link to="/movies/popular">Popular Movies</Link> or <Link to="/movies/upcoming">Browse All Movies</Link> to get started!</p>
      <p>For more information about The Movie Database, visit their <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">website</a>.</p>
      <img className="tmdb-logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_long_1-8ba2ac31f354005783fab473602c34c3f4fd207150182061e425d366e4f34596.svg" />
            </div>
      
        </>
    )
}

export default About