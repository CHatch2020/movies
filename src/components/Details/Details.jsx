import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function Details() {
  const movie = useSelector((store) => store.selectedMovie);
  const history = useHistory();

  const goBack = () => {
      history.push('/');
  }

  return (
    <div>
      <h1>Selected Movie</h1>
      <img src={movie.poster} alt={movie.title} />
      <h2>{movie.title}</h2>
      <h4>{movie.name}</h4>
      <h5>{movie.description}</h5>
      <button onClick={goBack}>Home</button>
    </div>
  );
}
