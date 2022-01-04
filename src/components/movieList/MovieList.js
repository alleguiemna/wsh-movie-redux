import React, { useState } from "react";
import { useSelector } from "react-redux";
import MovieCard from "../movieCard/MovieCard";

const MovieList = () => {
  const movieList = useSelector((state) => state.movieReducer.movies);
  const [text, setText] = useState("");
  return (
    <div className="container">
      <input
        type="text"
        className="col-md-5 mt-3"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <div className="d-flex justify-content-around flex-wrap">
        {movieList.filter(elt => elt.title.toUpperCase().trim().includes(text.toUpperCase().trim()))
        .map((elt, index) => (
          <MovieCard movie={elt} key={index} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
