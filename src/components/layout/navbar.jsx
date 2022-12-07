import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <div><Nav.Link href="App.js">Home</Nav.Link></div>
           <div> <Nav.Link href="portfolio.jsx">Portfolio</Nav.Link></div>
           <div><Nav.Link href="about.jsx">About</Nav.Link></div>
           <div><Nav.Link href="contact.jsx">Contact Me</Nav.Link></div>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Portfoilo
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contact Me</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;