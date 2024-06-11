import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Container,
} from "react-bootstrap";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className=" d-flex justify-content-between py-2">
        <div className=" w-25 ">
          <span className=" fw-bolder fs-1 ">Blog</span>_APP
        </div>

        <Navbar expand="lg" className=" justify-content-end relative ">
          <Nav className="me-auto d-none d-lg-flex" >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Culture & recreation</Nav.Link>
            <NavDropdown title="Inspiration" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Business</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#life">Life & arts</Nav.Link>
            <Nav.Link href="#science">Science</Nav.Link>
          </Nav>

          <Navbar.Toggle
            onClick={handleShow}
            aria-controls="basic-navbar-nav"
          />
          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              Some text as placeholder. In real life you can have the elements
              you have chosen. Like, text, images, lists, etc.
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
