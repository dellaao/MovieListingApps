import React, { useState } from 'react'
import { Row, Col, Navbar, Nav, Container, NavDropdown, Form, FormControl} from 'react-bootstrap';
import './Listfilm.css';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalDialog from 'react-bootstrap/ModalDialog';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';


interface IMovie {
  id:string;
  poster:string;
  date:string;
  title:string;
  vote:string;
  detail:string;
  backdrop:string;
} 

const Listfilm = (props:IMovie) => {

  const navigate = useNavigate();
    function handleClickFav(){
        navigate('/Favorite')
  }

  const [show, setShow] = useState(false);

  return (
    <div className='card' id={props.id}> 
          <div className='movie-wrapper'>
              <div className='img-movie-thumb'>
                  <img onClick={() => setShow(true)} src={props.poster} alt="" />
              </div>
              <p className='vote-movie'>
                <img src='./images/star.png'>
                </img>
                {props.vote}</p>
              <p onClick={() => setShow(true)} className='title-movie'>{props.title}</p>
              <p onClick={() => setShow(true)} className='date-movie'>{props.date}</p>
              {/* <Button onClick={() => setShow(true)} className='details-button' variant="light" >
                See Details
              </Button> */}
              <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-100w"
                aria-labelledby="example-custom-modal-styling-title"
              >
                <Modal.Header closeButton>
                  {/* <Modal.Title id="example-custom-modal-styling-title">
                    Movie Detail
                  </Modal.Title> */}
                </Modal.Header>
                <Modal.Body>
                  <figure className="movie">
                    <div className="movie__hero">
                        <img src={props.poster} className="movie__img">
                        </img>
                    </div>
                    <div className="movie__content">
                        <div className="movie__title">
                        <h1 className="heading__primary">{props.title}<i className="fas fa-fire"></i></h1>
                        {/* <div className="movie__tag movie__tag--1">#fantasy</div>
                        <div className="movie__tag movie__tag--2">#comedy</div> */}
                        </div>
                        <p className="movie__description">
                          {props.detail}
                        <a onClick={handleClickFav}>
                            <Button variant="light" size="lg">
                                Add To Favorite
                            </Button>
                        </a>
                        </p>
                    </div>
                    </figure>
                </Modal.Body>
              </Modal>
          </div> 
    </div>
  )
}

Listfilm.defaultProps ={
  id:'',
  vote: '00.00',
  title: 'Title',
  date: 'Jan, 2022'
}

export default Listfilm