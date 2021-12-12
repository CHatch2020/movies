import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MovieList.css";
import MovieItem from "../MovieItem/MovieItem";

function MovieList() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  const movies = useSelector((store) => store.movies);

  return (
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movieItem={movie} />
        ))}
      </section>
    </main>
  );
}

export default MovieList;
