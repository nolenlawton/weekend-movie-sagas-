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

            <div className='header'>
                <h2>MovieList</h2>
                <Link to='/addMovie'>
                    <h3 className='add'>Add Movie</h3>
                </Link> 
            </div> 
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Link  className='movieItem' key={movie.id} to={{pathname: `/details/${movie.id}`, state: movie}}>
                            
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