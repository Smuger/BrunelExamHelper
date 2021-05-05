import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo_white.png';
import { Container } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
      <meta charSet="utf-8" />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to={`/`}>
            <Navbar.Brand>
              <img
                src={logo}
                alt="Brunel University London Logo "
                style={{ width: '100px' }}
              />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://blackboard.brunel.ac.uk/" target="_blank">
                Blackboard
              </Nav.Link>
              <Nav.Link
                href="https://brunel.summon.serialssolutions.com/"
                target="_blank"
              >
                Library
              </Nav.Link>
              <Nav.Link
                href="https://europe.wiseflow.net/login/uk/brunel"
                target="_blank"
              >
                WISEflow
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
