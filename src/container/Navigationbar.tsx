import React from 'react'
import { Row, Col, Navbar, Nav, Container, NavDropdown, Form, FormControl} from 'react-bootstrap';
import './Navigationbar.css';
import { useNavigate } from "react-router-dom";

const Navigationbar = () => {
  let navigate = useNavigate();
  function handleClickHome() {
    navigate('/home')
  }
  function handleClickFav() {
    navigate('/favorite')
  }
  return (
    <div className='navigation-bar'>
          <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand onClick={handleClickHome}>
            <img
              src="images/olaf.png"
              width="120"
              height="80"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={handleClickFav}>
                Favorite
              </Nav.Link>
              <Nav.Link href="#pricing">Serial</Nav.Link>
              <Nav.Link href="#pricing">Film</Nav.Link>
              <Nav.Link href="#deets">Kids</Nav.Link>
              {/* <Form className="Search">
                <FormControl
                  type="search"
                  placeholder="Judul Film"
                  className="me-2"
                  aria-label="Search"
                />
              </Form> */}
              <div className="search">
                <div className="search-box">
                  {/* <button className="btn-search"><i className="fas fa-search"></i></button> */}
                  <input type="text" className="input-search" placeholder="Cari">
                  </input>
                </div>
              </div>  
              <NavDropdown title="Semua" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Kdrama</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cdrama</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Thaidrama</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Variety Show</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#deets">Masuk</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
    </div>
  )
}

export default Navigationbar