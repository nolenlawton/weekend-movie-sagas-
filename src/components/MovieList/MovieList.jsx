import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import { Link } from 'react-router-dom';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>Add Movie</h1>
            <div className='form'>
                <input type='text' placeholder='title' />
                <input type='text' placeholder='image url' />
                <input type='text' placeholder='description' />
                <select>
                    <option value="">select</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Animated">Animated</option>
                    <option value="Biographical">Biographical</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Drama">Drama</option>
                    <option value="Epic">Epic</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Musical">Musical</option>
                    <option value="Romantic">Romantic</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="Space-Opera">Space-Opera</option>
                    <option value="Superhero">Superhero</option>
                </select>
            </div>

            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Link key={movie.id} to={{pathname: `/details/${movie.id}`, state: movie}}>
                            
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title}/>
                        
                        </Link>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;