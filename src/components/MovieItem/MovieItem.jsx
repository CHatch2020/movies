import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function MovieItem({movieItem}) {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectMovie = (movieItem) => {
    dispatch({ type: "SET_SELECTED_MOVIE", payload: movieItem });
    history.push('/details');
  };

  return (
    <div key={movieItem.id}>
      <h3>{movieItem.title}</h3>
      <img 
        src={movieItem.poster} 
        alt={movieItem.title} 
        onClick={() => handleSelectMovie(movieItem)}/>
    </div>
  );
}

export default MovieItem;
