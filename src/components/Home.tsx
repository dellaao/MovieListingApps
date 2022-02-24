import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { Row, Col, Navbar, Nav, Container, NavDropdown, Form, FormControl} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Navigationbar from '../container/Navigationbar';
import Footer from '../container/Footer';
import Listfilm from '../container/Listfilm';


const Home = () => {
  return (
      <div>
        
        <Navigationbar/>

        <div className='carousel'>
        <Carousel>
            <Carousel.Item>
              <a className='image-carousel' href='/detail'>
                <img
                  className="d-block w-100"
                  src="/images/encanto-hd.jpg"
                  alt="First slide"
                />
              </a>
              {/* <Carousel.Caption>
                <h3>Encanto</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/frozen2-hd.jpg"
                alt="Second slide"
              />
              {/* <Carousel.Caption>
                <h3>Frozen II</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/krustykrab-hd.png"
                alt="Third slide"
              />
              {/* <Carousel.Caption>
                <h3>SpongeBob</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
        </div>

        <Listfilm/>
        
        <Footer/>

      </div>
  );
}

export default Home;