import { Navbar as NavbarBTS, Nav, Container, Navbar } from "react-bootstrap";
import { useMe } from "../../../hooks";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

const NavBar = () => {
  const { logout } = useMe();

  return (
    <NavbarBTS className="container-nav">
      <Container fluid>
        <NavbarBTS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBTS.Collapse id="basic-navbar-nav" className="container-nav-btn">
          <Nav className="btn-movies">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/new-releases">
              Estrenos
            </NavLink>
            <NavLink className="nav-link" to="/popular">
              Popular
            </NavLink>
            <NavLink className="nav-link" to="/search">
              Buscador
            </NavLink>
          </Nav>

          <Nav className="title-nav">
            <Navbar className="text-nav">AdaMovies</Navbar>
          </Nav>

          <Nav className="btn-forms">
            <NavLink className="nav-login" to={"/login"}>Login</NavLink>
            <NavLink className="nav-login" to={"/signup"}>Register</NavLink>
            <Nav.Link className="nav-logout" onClick={logout}>
              Logout
            </Nav.Link>
          </Nav>
        </NavbarBTS.Collapse>
      </Container>
    </NavbarBTS>
  );
};

export { NavBar };