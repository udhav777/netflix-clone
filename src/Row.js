import React from "react";
import { useEffect, useState } from "react";
import axios from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const baseURL = "https://image.tmdb.org/t/p/original/";
  const [trailerUrl, setTrailerUrl] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie.title || movie.original_title || movie.name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  console.log(trailerUrl);
  return (
    <div className="row">
      <h3>{title}</h3>

      <div className="row-poster">
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${baseURL}${movie.poster_path}`}
            alt={movie.name}
            className="row-post"
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
      {/* {trailerUrl} */}
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
