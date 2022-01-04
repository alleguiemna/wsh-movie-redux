import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteMovie } from "../../redux/actions/movieActions";
import EditMovie from "../editMovie/EditMovie";
import {Link} from "react-router-dom'"


const MovieCard = ({movie}) => {
          const dispatch = useDispatch()
  return (
    <div>
      <Card style={{ width: "19rem" }} className="mx-3 my-3">
        <Card.Img variant="top" src={movie.posterUrl} height="250px" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <span>{movie.description}</span>
            <br/>
            <span>{movie.rate}</span>
          </Card.Text>
          <div className="d-flex justify-content-around">
          <Button variant="danger" onClick={() => dispatch(deleteMovie(movie.id))}>Delete</Button>
          <EditMovie movie={movie}/>
          <Link to={`/${movie.id}`}><Button variant="primary">Watch</Button></Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
