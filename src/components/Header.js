import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar id="navbar" bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="/">
        Dandeli Forest Escapes
        {/* <img className="mobiux-logo" src= alt="mobiux logo" />{" "} */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="">
          <Nav.Item>
            <a href="#gallery" className="nav-link">
              Gallery
            </a>
          </Nav.Item>
          <Nav.Item>
            <a href="#about-us" className="nav-link">
              About us
            </a>
          </Nav.Item>
          <Nav.Item>
            <a href="#contact-us" className="nav-link">
              Contact us
            </a>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
