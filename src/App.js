import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import AddMovie from "./components/addMovie/AddMovie";
import MovieList from "./components/movieList/MovieList";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/login/Login";
import ProductDetail  from "./components/productDetail/ProductDetail"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={MovieList} />
          <Route path="/add" exact component={AddMovie} />
          <Route path="/login" exact component={Login} />
          <Route path="/:id" render={(props) => <ProductDetail {...props} />}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
