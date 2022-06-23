import Image from "next/image";
import React, { useState } from "react";

const Home = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [movies, setMovies] = useState([
    {
      Title: "Star Wars",
      Year: "1977",
      imdbID: "tt0076759",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzg4MjQxNTQtZmI5My00YjMwLWJlMjUtMmJlY2U2ZWFlNzY1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode V - The Empire Strikes Back",
      Year: "1980",
      imdbID: "tt0080684",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VI - Return of the Jedi",
      Year: "1983",
      imdbID: "tt0086190",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOWZlMjFiYzgtMTUzNC00Y2IzLTk1NTMtZmNhMTczNTk0ODk1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VII - The Force Awakens",
      Year: "2015",
      imdbID: "tt2488496",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode I - The Phantom Menace",
      Year: "1999",
      imdbID: "tt0120915",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTRhNjcwNWQtMGJmMi00NmQyLWE2YzItODVmMTdjNWI0ZDA2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode III - Revenge of the Sith",
      Year: "2005",
      imdbID: "tt0121766",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode II - Attack of the Clones",
      Year: "2002",
      imdbID: "tt0121765",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMDAzM2M0Y2UtZjRmZi00MzVlLTg4MjEtOTE3NzU5ZDVlMTU5XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
    },
    {
      Title: "Star Wars: Episode VIII - The Last Jedi",
      Year: "2017",
      imdbID: "tt2527336",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjQ1MzcxNjg4N15BMl5BanBnXkFtZTgwNzgwMjY4MzI@._V1_SX300.jpg",
    },
    {
      Title: "Rogue One: A Star Wars Story",
      Year: "2016",
      imdbID: "tt3748528",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SX300.jpg",
    },
    {
      Title: "Star Trek",
      Year: "2009",
      imdbID: "tt0796366",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjE5NDQ5OTE4Ml5BMl5BanBnXkFtZTcwOTE3NDIzMw@@._V1_SX300.jpg",
    },
  ]);

  const getMovieRequest = async (searchValue: any) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=263d22d8`;

    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  return (
    <div>
      <input
        className="border-2 border-sky-500"
        type="text"
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
      />
      <button
        onClick={() => {
          getMovieRequest(searchValue);
        }}
      >
        search
      </button>

      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {movies.map((movie, i) => (
            <div
              key={i}
              className="my-1 px-1 w-1/2 sm:w-1/3 md:w-1/4 lg:my-4 lg:px-4"
            >
              <article className="overflow-hidden shadow-lg">
                <a href={`/movies/${movie.imdbID}`}>
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src={movie.Poster}
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-sm">
                    <a
                      className="no-underline hover:underline text-black"
                      href={`/movies/${movie.imdbID}`}
                    >
                      {movie.Title}
                    </a>
                  </h1>
                  <p className="text-grey-darker text-sm">{movie.Year}</p>
                </header>
              </article>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
