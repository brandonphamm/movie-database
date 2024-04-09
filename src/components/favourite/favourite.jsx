import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useState } from "react";
import "./favourite.css"



const Favourites = () => {
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  const toggleFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((movie) => movie.id !== movieId);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=2384c6978e58ea305f4ac2c6cf02aefc")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])



  return (
    
    <div>
      
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


      <div className="favourites-info"> 
      <h1>Favorites</h1>
      {favorites.length === 0 ? (
        <div>
        <p className="favourite-p">No movies favorited yet.</p>
        
        </div>
      ) : (
        <div className="favorite-cards">
          {favorites.map((movie) => (
            <div key={movie.id} className="cards">
              <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} alt={movie.original_title} />
                <div className="cards__overlay">
                  
                <button className="more-info">
            <p>More Info</p>
          </button>
                  <div className="card__title">{movie ? movie.original_title : ""}</div>
                  <div className="card__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="card__rating">
                      {movie ? movie.vote_average : ""}
                      <i className="fas fa-star" />
                    </span>
                  </div>
                  <div className="card__description">{movie ? movie.overview.slice(0, 118) + "..." : ""}</div>
                </div>
              </Link>
              <button className="favorite-button" onClick={() => toggleFavorite(movie.id)}>
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default Favourites;
