import { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

function AddMovie () {
    const [movie, setMovie] = useState({})
    const history = useHistory()
    const dispatch = useDispatch()

    const add = () => {
        dispatch({
            type: 'ADD_MOVIE',
            payload: movie
        })
        history.goBack()
    }

    const cancel = () => {
        history.goBack()
    }

    return(
        <>
        <h1>Add Movie</h1>
            <div className='form'>
                <input onChange={(event) => setMovie({...movie, title: event.target.value})} type='text' placeholder='title' />
                <input onChange={(event) => setMovie({...movie, poster: event.target.value})} type='text' placeholder='image url' />
                <input onChange={(event) => setMovie({...movie, description: event.target.value})} type='text' placeholder='description' />
                <select onChange={(event) => setMovie({...movie, genre: event.target.value})}>
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
                    <option value="Superhero">Superhero</option>``
                </select>

                <button onClick={cancel}>Cancel</button>
                <button onClick={add}>Add</button>
            </div>
        </>
    )
}

export default AddMovie