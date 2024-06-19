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
        <NavLink to="" className=" text-decoration-none text-black w-25 ">
          <span className=" font-bold fs-1 ">Writer's</span>_NOTE
        </NavLink>

        <Navbar expand="lg" className=" justify-content-end relative ">
          <Nav className="me-auto d-none d-lg-flex">
            <NavLink
              to=""
              className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
            >
              Home
            </NavLink>
            <NavLink
              to="#"
              className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
            >
              Culture & recreation
            </NavLink>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item>
                <NavLink
                  to="#"
                  className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
                >
                  Business
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="#"
                  className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
                >
                  Action
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="#"
                  className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
                >
                  Life & arts
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="#"
                  className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
                >
                  Another action
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              to="#"
              className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
            >
              Science
            </NavLink>
            <NavLink
              to="contact"
              className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
            >
              Contact
            </NavLink>
          </Nav>

          <Navbar.Toggle
            onClick={handleShow}
            aria-controls="basic-navbar-nav"
          />

          <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title onClick={handleClose}>
                <NavLink
                  to=""
                  className=" text-decoration-none text-black w-25 "
                >
                  <span className=" font-bold fs-1 ">Writer's</span>_NOTE
                </NavLink>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav>
                <ul className=" flex flex-col gap-2">
                  <NavLink
                    onClick={handleClose}
                    to=""
                    className="text-decoration-none text-slate-700 hover:text-slate-00 p-2 hover:bg-slate-100 rounded-md "
                  >
                    Home
                  </NavLink>

                  <NavLink
                    onClick={handleClose}
                    to="#"
                    className="text-decoration-none text-slate-700 hover:text-slate-00 p-2 hover:bg-slate-100 rounded-md "
                  >
                    Culture & recreation
                  </NavLink>
                  <NavDropdown
                    title="Categories"
                    id="basic-nav-dropdown"
                    className=" p-2 hover:bg-slate-100 rounded-md "
                  >
                    <NavDropdown.Item>
                      <NavLink
                        onClick={handleClose}
                        to="#"
                        className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
                      >
                        Business
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        onClick={handleClose}
                        to="#"
                        className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
                      >
                        Action
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        onClick={handleClose}
                        to="#"
                        className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
                      >
                        Life & arts
                      </NavLink>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <NavLink
                        onClick={handleClose}
                        to="#"
                        className="text-decoration-none p-2 text-slate-700 hover:text-slate-00"
                      >
                        Another action
                      </NavLink>
                    </NavDropdown.Item>
                  </NavDropdown>

                  <NavLink
                    onClick={handleClose}
                    to="#"
                    className="text-decoration-none text-slate-700 hover:text-slate-00 p-2 hover:bg-slate-100 rounded-md "
                  >
                    Science
                  </NavLink>
                  <NavLink
                    onClick={handleClose}
                    to="contact"
                    className="text-decoration-none text-slate-700 hover:text-slate-00 p-2 hover:bg-slate-100 rounded-md "
                  >
                    Contact
                  </NavLink>
                </ul>
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </Navbar>
      </Container>
    </>
  );
};

export default Header;
