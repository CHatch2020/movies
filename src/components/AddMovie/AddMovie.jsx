import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function AddMovie () {
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES'});
    }, []);

    const genres = useSelector(store => store.genres);
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre_id, setGenre_id] = useState(0);

    const handleAddMovie = () => {
        console.log('New Movie', title);
        dispatch({
            type: 'ADD_MOVIE',
            payload: {title, poster, description, genre_id}
        })
        alert('You have added a movie!');
        history.push('/');
    };

    const goHome = () => {
        alert('You have cancelled adding a movie');
        history.push('/');
    }

    return(
        <div>
            <h2>Add a Movie!</h2>
            <form>
                <input 
                    type="text" 
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)} />
                <input 
                    type="url" 
                    value={poster}
                    placeholder="Poster URL"
                    onChange={(e) => setPoster(e.target.value)} />
                <input 
                    type="text" 
                    value={description}
                    placeholder="Description"
                    onChange={(e) => setDescription(e.target.value)} />
                <select value={genre_id}
                    onChange={(e) => setGenre_id(e.target.value)}>
                        <option disabled value='0'>
                            Pick a Genre!
                        </option>
                        {genres.map((genre) => {
                            return (
                                <option 
                                key={genre.id}
                                value={genre.id}>
                                    {genre.name}
                                </option>
                            )
                        })}
                </select>
                <button onClick={handleAddMovie}>Save</button>
                <button onClick={goHome}>Cancel</button>
            </form>
        </div>
    )
};

export default AddMovie;