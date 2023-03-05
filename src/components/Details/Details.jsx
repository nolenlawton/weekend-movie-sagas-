import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

function Details () {
    const history = useHistory()
    const dispatch = useDispatch()

    const genres = useSelector(store => store.genres)
    const movie = useSelector(store => store.movie)
    const {id} = useParams()

    const handleBack = () => {
        history.goBack()
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES', payload: id});
        dispatch({ type: 'FETCH_MOVIE', payload: id});
    }, []);

    return(
        <>
            <h2>Details</h2>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
            <h4>{genres}</h4>
            <h4>{movie.description}</h4>
            <button onClick={handleBack}>Back To List</button>
        </>
    )
}

export default Details