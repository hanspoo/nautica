import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState, useEffect } from "react";

function NavBarBootstrap() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100);
    });
  }, []);
  return (
    <Navbar
      fixed="top"
      expand="lg"
      className={scroll ? "claro p-4" : "blue p-4"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img
            className="logo"
            src={scroll ? "/imgs/logo-dark.png" : "/imgs/logo-light.png"}
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle className="border-0 ">
          <i className="fa-solid fa-bars bars-icon burger-icon text-white sizeBurguer"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" bootnav" style={{ width: "100%" }}>
            <div
              to="/#linkcontacto"
              className="list-item abootnav aBootstrap"
            >
              INICIO
            </div>
            <div to="/#linkcontacto" className="list-item  aBootstrap">
              NUESTRAS LANCHAS
            </div>
            <div to="/#linkcontacto" className="list-item  aBootstrap">
              UBICACIÓN
            </div>
            <div to="/#linkcontacto" className="list-item  aBootstrap">
              CONTACTO
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarBootstrap;
