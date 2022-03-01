import React, { useState } from 'react'
import { Row, Col, Navbar, Nav, Container, NavDropdown, Form, FormControl} from 'react-bootstrap';
import './Listfilm.css';
import axios from "axios";

interface IMovie {
  id:string;
  poster:string;
  date:string;
  title:string;
  vote:string;
} 

const Listfilm = (props:IMovie) => {
  return (
    <div className='card' id={props.id}> 
          <div className='movie-wrapper'>
              <div className='img-movie-thumb'>
                  <img src={props.poster} alt="" />
              </div>
              <p className='vote-movie'>{props.vote}</p>
              <p className='title-movie'>{props.title}</p>
              <p className='date-movie'>{props.date}</p>
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