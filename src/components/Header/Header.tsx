import { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Offcanvas,
  Container,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Container className=" d-flex justify-content-between py-2">
        <div className=" w-25 ">
          <span className=" font-bold fs-1 ">Writer's</span>_NOTE
        </div>

        <Navbar expand="lg" className=" justify-content-end relative ">
          <Nav className="me-auto d-none d-lg-flex">
            <Nav.Link>
              <NavLink to="" className="text-decoration-none p-2 text-slate-700 hover:text-slate-00">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="culture" className="text-decoration-none p-2 text-slate-700 hover:text-slate-00">Culture & recreation</NavLink>
            </Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink to="#" className="text-decoration-none p-2 text-slate-700 hover:text-slate-00" >Business</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="#" className="text-decoration-none p-2 text-slate-700 hover:text-slate-00" >Action</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="#" className="text-decoration-none p-2 text-slate-700 hover:text-slate-00" >Life & arts</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink to="#" className="text-decoration-none p-2 text-slate-700 hover:text-slate-00" >Another action</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link>
              <NavLink to="#" className="text-decoration-none p-2 text-slate-700 hover:text-slate-00" >Science</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="#" className="text-decoration-none p-2 text-slate-700 hover:text-slate-00" >Contact</NavLink>
            </Nav.Link>
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
