import React from 'react'
import { Row, Col, Navbar, Nav, Container, NavDropdown, Form, FormControl} from 'react-bootstrap';
import './Listfilm.css';

const Listfilm = () => {
  return (
    <div className='card'>  
        <Container>
        <Row>
          <Col xs={6} md={4}>
            <div></div>
              <div className="card">
                <img src="/images/encanto-poster.jpeg" />
                <div className="info">
                    <h1>Encanto</h1>
                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    <a href='/detail'>
                        <button  className='button-read-more'>Read More</button>
                    </a>
                </div>
              </div>
          </Col>
          <Col xs={6} md={4}>
            <div></div>
              <div className="card">
                <img src="/images/frozen-poster.jpg" />
                <div className="info">
                    <h1>Frozen II</h1>
                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    <button className='button-read-more'>Read More</button>
                </div>
              </div>
          </Col>
          <Col xs={6} md={4}>
            <div></div>
              <div className="card">
                <img src="/images/rons-poster.jpg" />
                <div className="info">
                    <h1>Rons Gone Wrong</h1>
                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    <button className='button-read-more'>Read More</button>
                </div>
              </div>
          </Col>
          <Col xs={6} md={4}>
            <div></div>
              <div className="card">
                <img src="/images/all-poster.jpg" />
                <div className="info">
                    <h1>All Of Us Are Dead</h1>
                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    <button className='button-read-more'>Read More</button>
                </div>
              </div>
          </Col>
          <Col xs={6} md={4}>
            <div></div>
              <div className="card">
                <img src="/images/hotel-poster.jpg" />
                <div className="info">
                    <h1>Hotel Transylvania</h1>
                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    <button className='button-read-more'>Read More</button>
                </div>
              </div>
          </Col>
          <Col xs={6} md={4}>
            <div></div>
              <div className="card">
                <img src="/images/shang-poster.jpg" />
                <div className="info">
                    <h1>Shang Chi</h1>
                    <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
                    <button className='button-read-more'>Read More</button>
                </div>
              </div>
          </Col>
        </Row>
        </Container>

        </div>
  )
}

export default Listfilm