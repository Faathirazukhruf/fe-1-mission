import React from 'react';

const MovieSection = ({ title, movies }) => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">{title}</h2>
        <div className="movie-grid">
          {movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img src={movie.image} alt={movie.title} />
              <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                {movie.rating && <p className="movie-card-rating">{movie.rating}</p>}
                <button className="movie-card-button">
                  {movie.rating ? 'Lanjutkan' : 'Tonton Sekarang'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MovieSection;