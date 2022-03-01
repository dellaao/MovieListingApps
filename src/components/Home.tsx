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

interface IMovie {
  id:number;
  poster_path:string;
  release_date:string;
  date:string;
  title:string;
  vote_average:string;
}

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w1280/";

const Home = () => {
  let navigate = useNavigate();

  function handleClickDetail(){
    navigate('/detail')
  }

  const [dataMovie, setDataMovie] = useState<IMovie[]>([]);

  const fetchTrending = async () => {
    const {data} = await axios.get(
      "https://api.themoviedb.org/3/trending/all/week?api_key=eccc5ea1919b90fc7004f8df41e8beed"
    );
    console.log(data.results);
    setDataMovie(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, []);


  return (
      <div>

        <Navigationbar/>

        <div className='carousel'>
        <Carousel>
          <Carousel.Item>
            <a className='image-carousel' onClick={handleClickDetail}>
              <img
                className="d-block w-100"
                src="/images/encanto-hd.jpg"
                alt="First slide"
              />
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/frozen2-hd.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/krustykrab-hd.png"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
        </div>
        
        <div className="container-video">
          {
            dataMovie && dataMovie.map((c) =>
              <Listfilm key={c.id} id={`${c.id}`} poster={`${BASE_IMAGE_URL}${c.poster_path}`} title={c.title} date={c.release_date} vote={c.vote_average} />
            )
          }
          
        </div>
        
        
        <Footer/>

      </div>
  );
}

export default Home;