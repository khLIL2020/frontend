import { Navbar } from "react-bootstrap";
import { Nav, Card, Container, NavDropdown } from "react-bootstrap";
import Image from "./logo.jpg";
import "./styles.css";
import Search from './Search'
import {useState} from 'react';
function Bar() {
  


  return (
    <div className="nav">
      <Navbar
        bg="light"
        variant="success"
        expand="lg"
        sticky="top"
        className="Navbar"
      >
        <Container className="Navbar">
      
          <Navbar.Brand className="Navbar" href="/">
            {" "}
            <Card.Img variant="top" src={Image} className="Logo" />
          </Navbar.Brand>
    
          <Nav.Link className="me-auto" href="/home">
            Products
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Categories" className="me-auto">
                <NavDropdown.Item href="/categorie/action">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item href="/categorie/horreur">
                  {" "}
                  Horreur
                </NavDropdown.Item>
                <NavDropdown.Item href="/categorie/culte">
                  Culte
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="me-auto" href="/contact-us">

                About us
              </Nav.Link>
              <Nav.Link className="me-auto" href="/card">
                
        card
              </Nav.Link>
      
            </Nav>

            <Search classNameme='Recherche'/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
export default Bar;
