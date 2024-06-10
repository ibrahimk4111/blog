import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import { FaBehance, FaDribbble, FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-dark text-white ">
      <Container>
        <Row className=" gap-5 p-5 ">
          {/* About us */}
          <Col>
            <h5 className=" mb-3">About us</h5>
            <p className=" custom-footer-text-sm ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              obcaecati voluptates pariatur laboriosam, reprehenderit ex
              molestias magni unde.
            </p>
          </Col>

          {/* Newsletter */}
          <Col>
            <h5 className=" mb-3 ">Newsletter</h5>
            <p className=" custom-footer-text-sm ">
              Stay updated with our latest blogs.
            </p>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder="Email address"
                aria-label="Email address"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                <FaTelegramPlane fill="cyan" size={25} />
              </Button>
            </InputGroup>
          </Col>

          {/* Navigation */}
          <Col>
            <h5 className=" mb-3 ">Networks</h5>
            <div className=" d-flex flex-column flex-wrap ">
              <li className=" custom-footer-li "><a href="#" >Culture & recreation</a></li>
              <li className=" custom-footer-li "><a href="#" > Technology</a></li>
              <li className=" custom-footer-li "><a href="#" > Business</a></li>
              <li className=" custom-footer-li "><a href="#" > Professional</a></li>
              <li className=" custom-footer-li "><a href="#" > Science</a></li>
              <li className=" custom-footer-li "><a href="#" > Life & arts</a></li>
              <li className=" custom-footer-li "><a href="#" > Data</a></li>
              <li className=" custom-footer-li "><a href="#" > API</a></li>
            </div>
          </Col>

          {/* Follow us */}
          <Col>
            <h5 className=" mb-3 ">Follow us</h5>
            <p className=" custom-footer-text-sm">Lets join us</p>
            <div className=" d-flex gap-2 ">
              <FaFacebookF className=" custom-footer-icon" />
              <FaInstagram className=" custom-footer-icon" />
              <FaDribbble className=" custom-footer-icon" />
              <FaBehance className=" custom-footer-icon" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
