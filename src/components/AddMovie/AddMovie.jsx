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
            payload: {movie: movie}
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
                <select onChange={(event) => setMovie({...movie, genre_id: event.target.value})}>
                    <option value="">select</option>
                    <option value="1">Adventure</option>
                    <option value="2">Animated</option>
                    <option value="3">Biographical</option>
                    <option value="4">Comedy</option>
                    <option value="5">Disaster</option>
                    <option value="6">Drama</option>
                    <option value="7">Epic</option>
                    <option value="8">Fantasy</option>
                    <option value="9">Musical</option>
                    <option value="10">Romantic</option>
                    <option value="11">Science Fiction</option>
                    <option value="12">Space-Opera</option>
                    <option value="13">Superhero</option>``
                </select>

                <button onClick={cancel}>Cancel</button>
                <button onClick={add}>Add</button>
            </div>
        </>
    )
}

export default AddMovie