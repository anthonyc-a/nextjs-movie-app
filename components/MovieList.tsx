import React from "react";

const MovieList = (props: any) => {
  const FavouriteComponent = props.favouriteComponent;

  return (
    <>
      {props.movies.map((movie: any, index: any) => (
        <div
          key={index}
          className="image-container justify-content-start m-3"
        >
          <img className="rounded" src={movie.Poster} alt="movie"></img>
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay rounded-botttom d-flex align-items-center justify-content-center"
          >
            <FavouriteComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
