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
      <h3>{movie.title}</h3>
      <h4>{movie.description}</h4>
      <button onClick={goBack}>Home</button>
    </div>
  );
}
