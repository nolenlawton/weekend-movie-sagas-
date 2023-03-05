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
            <div className="movieItem">
                <h2>{movie.title}</h2>
                <img src={movie.poster} alt={movie.title}/>
            </div>
            <h4>{genres}</h4>
            <h4 className="description">{movie.description}</h4>
            <button className="back" onClick={handleBack}>Back To List</button>
        </>
    )
}

export default Details