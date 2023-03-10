import {HashRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import AddMovie from '../AddMovie/AddMovie';
import MovieList from '../MovieList/MovieList'
import Details from '../Details/Details';

function App() {
  return (
    <div className="App">
      <Router> 
      <h1>The Movies Saga!</h1> 
      
        <Route path="/" exact> 
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route path="/details/:id" exact>
          <Details />
        </Route>

        {/* Add Movie page */}
        <Route path="/addMovie" exact>
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
