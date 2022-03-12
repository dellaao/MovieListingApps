import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { Row, Col, Navbar, Nav, Container, NavDropdown, Form, FormControl} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Navigationbar from '../container/Navigationbar';
import Footer from '../container/Footer';
import Listfilm from '../container/Listfilm';
import { useNavigate } from 'react-router';
import axios from "axios";
import Favorite from './Favorite';

interface IMovie {
  id:string;
  poster_path:string;
  release_date:string;
  date:string;
  title:string;
  vote_average:string;
  overview:string;
  backdrop_path:string;
}

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";

const Home = () => {
  const navigate = useNavigate();

  function handleClickDetail(){
    navigate('/detail')
  }

  const [dataMovie, setDataMovie] = useState<IMovie[]>([]);
  const fetchTrending = async () => {
    const {data} = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=eccc5ea1919b90fc7004f8df41e8beed&language=en-US&page=1"
    );
    console.log(data.results);
    setDataMovie(data.results);
  };

  useEffect(() => {
    fetchTrending();
    
  }, []);

  // add
  const addFav = (item:IMovie) => {
    const newFavList = [...dataMovie, item];
    setDataMovie(newFavList);
    console.log(item);
    console.log(newFavList);
    console.log(dataMovie);
    console.log(setDataMovie);
  }

  return (
      <div>

        <Navigationbar/>

        <div className='carousel'>
        <Carousel>
          {
            dataMovie && dataMovie.map((c) =>
            <Carousel.Item>
            <a className='image-carousel'>
              <img
                className="d-block w-100"
                src={`${BASE_IMAGE_URL}${c.backdrop_path}`}
                alt="First slide"
              />
            </a>
          </Carousel.Item>
          )}
        </Carousel>
 
        </div>

        <h1 className='title-trending'>Trending</h1>
        <div className="container-video">
          
          {
            dataMovie && dataMovie.map((c) =>
              <Listfilm key={c.id} id={c.id} poster_path={`${BASE_IMAGE_URL}${c.poster_path}`} backdrop_path={`${BASE_IMAGE_URL}${c.backdrop_path}`} title={c.title} release_date={c.release_date} vote_average={c.vote_average} overview={c.overview}/>
            )
          }
          
        </div>
        <Footer/>

      </div>
  );
}

export default Home;