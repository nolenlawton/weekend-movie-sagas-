import { useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

function Details () {
    const history = useHistory()
    const location = useLocation()
    const dispatch = useDispatch()
    const genres = useSelector(store => store.genres)
    const movie = location.state

    const handleBack = () => {
        history.goBack()
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRES', payload: movie.id});
    }, []);

    console.log(`${movie.title} has the genres: `, genres)

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