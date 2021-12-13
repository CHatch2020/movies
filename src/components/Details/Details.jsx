import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "./Details.css";

export default function Details() {
  const movie = useSelector((store) => store.selectedMovie);
  const history = useHistory();

  const goBack = () => {
    history.push("/");
  };

  return (
    <div>
      <div className="head">
        <h1>Selected Movie</h1>
      </div>
      <img className="image" src={movie.poster} alt={movie.title} />
      <div className="info">
        <h2 className="title">{movie.title}</h2>
        <h4 className="genre">{movie.name}</h4>
        <h5 className="desc">{movie.description}</h5>
      </div>
      <button className="homeButt" onClick={goBack}>Home</button>
    </div>
  );
}
