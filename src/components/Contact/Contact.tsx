import { Button, Container, Form } from "react-bootstrap";
import { BiLocationPlus } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import img4 from "/img_4.webp";


const Contact = () => {
  return (
    <div className="pb-5">
      <div className=" max-h-[70vh] overflow-hidden mb-5 ">
        <img
          src={img4}
          alt="img4"
          decoding="async"
          className=" w-full h-auto "
        />
      </div>
      <Container className=" grid lg:grid-cols-2 gap-5">
        <div className=" flex flex-col justify-center items-start gap-4 lg:w-[70%] mx-auto px-4">
          <div className=" flex flex-col items-start gap-2 ">
            <BiLocationPlus className=" w-10 h-10 p-2 bg-slate-200 rounded-full" />
            <span>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi,
              inventore.
            </span>
          </div>
          <div className=" flex flex-col items-start gap-2 ">
            <IoCall className=" w-10 h-10 p-2 bg-slate-200 rounded-full" /> <span>+880 1517 833 878</span>
          </div>
          <div className=" flex flex-col items-start gap-2 ">
            <MdEmail className=" w-10 h-10 p-2 bg-slate-200 rounded-full" /> <span>ibrahimk4111@gmail.com</span>
          </div>
        </div>

        {/* form section */}
        <Form className=" bg-slate-100 p-4 rounded-md ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="name" placeholder="Your Name" />
          </Form.Group>
          <Form.Group className=" mb-3 ">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Leave your message here"
              rows={5}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            send
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Contact;
