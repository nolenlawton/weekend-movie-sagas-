import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_GENRES', fetchAllGenres);
    yield takeEvery('FETCH_MOVIE', fetchMovie);
    yield takeEvery('ADD_MOVIE', addMovie);
}

function* fetchAllMovies() {
    try {
        const movies = yield axios.get('/api/movie');
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchAllGenres(action) {
    const movieId = action.payload

    try {
        const result = yield axios.get(`/api/genre/${movieId}`);
        const genres = result.data[0].genres
        yield put({ type: 'SET_GENRES', payload: genres });

    } catch {
        console.log('get all error');
    }
        
}

function* fetchMovie(action) {
    const movieId = action.payload

    try {
        const result = yield axios.get(`/api/movie/${movieId}`);
        const movie = result.data[0]
        yield put({ type: 'SET_MOVIE', payload: movie });

    } catch {
        console.log('get all error');
    }
        
}

function* addMovie(action) {
    try {
        const movies = yield axios.post('/api/movie', action.payload.movie);

        yield put({ type: 'SET_MOVIES', payload: movies.data });


    } catch {
        console.log('get all error');
    }
        
}


// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        case 'ADD_MOVIE':
            return [...state, action.payload]
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            return action.payload;
        default:
            return state;
    }
}

const movie = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return action.payload;
        default:
            return state
    }

}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        movie
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
