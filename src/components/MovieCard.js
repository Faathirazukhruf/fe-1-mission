import React from 'react';

const MovieCard = ({ image, title, rating, buttonText }) => {
  return (
    <div className="movie-card">
      <img src={image} alt={title} />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{title}</h3>
        {rating && <p className="movie-card-rating">{rating}/5</p>}
        <button className="movie-card-button">{buttonText}</button>
      </div>
    </div>
  );
};

export default MovieCard;