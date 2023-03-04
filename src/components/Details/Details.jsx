import { useLocation } from "react-router-dom"
import { useHistory } from "react-router-dom"

function Details () {
    const history = useHistory()
    const location = useLocation()
    const movie = location.state

    const handleBack = () => {
        history.goBack()
    }

    return(
        <>
            <h2>Details</h2>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title}/>
            <h4>{movie.description}</h4>
            <button onClick={handleBack}>Back To List</button>
        </>
    )
}

export default Details