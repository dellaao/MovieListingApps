import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import Button from 'react-bootstrap/Button';
import { Row, Col, Navbar, Nav, Container, NavDropdown, Form, FormControl} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Navigationbar from '../container/Navigationbar';

const Home = () => {
  return (
      <div>
        
        <Navigationbar/>

        <div className='carousel'>
        <Carousel>
            <Carousel.Item>
              <a href='/detail'>
                <img
                  className="d-block w-100"
                  src="/images/gambar1.webp"
                  alt="First slide"
                />
              </a>
              <Carousel.Caption>
                <h3>Encanto</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/gambar2.webp"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Rons Gone Wrong</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/images/gambar4.webp"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Kings Man</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </div>

        <div className='card'>
          <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src="holder.js/100px160" />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className="footer">
          <img id="logo" src="images/disney--1.svg" alt="logo" />
          <div className="links">
            <a href="">Follow Us</a>
          </div>
          <div className="socials">
            <a href="">
              <img src="images/icon-facebook.svg" alt="ic-fb" />
            </a>
            <a href="">
              <img src="images/icon-instagram.svg" alt="ic-ig" />
            </a>
            <a href="">
              <img src="images/icon-twitter.svg" alt="ic-tw" />
            </a>
            <a href="">
              <img src="images/icon-pinterest.svg" alt="ic-pin" />
            </a>
        </div>
        </div>

      </div>
  );
}

export default Home;