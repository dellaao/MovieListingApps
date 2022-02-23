import React from 'react'
import { Row, Col, Navbar, Nav, Container, NavDropdown, Form, FormControl} from 'react-bootstrap';

const Navigationbar = () => {
  return (
    <div className='navigation-bar'>
          <Navbar className="fixed-top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/home">
            <img
              src="images/disney--1.svg"
              width="80"
              height="80"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                Favorite
              </Nav.Link>
              <Nav.Link href="#pricing">Serial</Nav.Link>
              <Nav.Link href="#pricing">Film</Nav.Link>
              <Nav.Link href="#deets">Kids</Nav.Link>
              <Form className="Search">
                <FormControl
                  type="search"
                  placeholder="Judul Film"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
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