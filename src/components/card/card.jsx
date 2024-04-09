import React, { useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  useEffect(() => {
    // Check if the current movie is in favorites when component mounts
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.some(fav => fav.id === movie.id));
  }, [movie]);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const index = favorites.findIndex((fav) => fav.id === movie.id);

    if (index !== -1) {
      // Remove from favorites if already favorited
      favorites.splice(index, 1);
    } else {
      // Add to favorites if not favorited
      favorites.push(movie);
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <>
      {isLoading ? (
        <div className="cards">
          <SkeletonTheme color="#202020" highlightColor="#444">
            <Skeleton height={300} duration={2} />
          </SkeletonTheme>
        </div>
      ) : (
        
        <div className="cards">
          
          <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "white" }}>
            <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie ? movie.poster_path : ""}`} />
            
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
          <button className="favorite-button" onClick={toggleFavorite}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
        
      )}
      
    </>
    
  );
};

export default Cards;
