import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addMovie } from "../../redux/actions/movieActions";

const AddMovie = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [rate, setRate] = useState(0);
  const dispatch = useDispatch()

  const handleSubmit = (e) =>{
  e.preventDefault()
  dispatch(addMovie({id:Math.random(),title,description,posterUrl:url,rate}))
  setTitle("")
  setDescription("")
  setRate(0)
  setUrl("")
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            title:
            <input
              type="text"
              className="form-control"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            Description:
            <input
              type="text"
              className="form-control"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            PosterUrl:
            <input
              type="text"
              className="form-control"
              onChange={(e) => setUrl(e.target.value)}
              value={url}
            />
            Rate:
            <input
              type="number"
              className="form-control"
              onChange={(e) => setRate(e.target.value)}
              value={rate}
            />
            <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
