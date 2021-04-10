import React from "react";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "./logo_white.png";

const Header = () => {
  return (
    <header>
      <meta charSet="utf-8" />
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Link to={`/`}>
          <Navbar.Brand>
            <img src={logo} style={{ width: "100px" }} />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://blackboard.brunel.ac.uk/" target="_blank">
              Blackboard
            </Nav.Link>
            <Nav.Link
              href="https://www.brunel.ac.uk/life/library"
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
      </Navbar>
    </header>
  );
};

export default Header;
