import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function AddMovie () {
    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES'});
    }, []);

    const genres = useSelector(store => store.genres);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [poster, setPoster] = useState('');
    const [description, setDescription] = useState('');
    const [genre, setGenre] = useState(0);

    const handleAddMovie = () => {
        console.log('New Movie', title);
        dispatch({
            type: ''
        })
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
                <select value={genre}
                    onChange={(e) => setGenre(e.target.value)}>
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
                <button onClick={handleAddMovie}>Submit</button>
            </form>
        </div>
    )
};