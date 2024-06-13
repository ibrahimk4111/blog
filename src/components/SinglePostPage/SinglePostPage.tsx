import { Button, Container, Form, InputGroup } from "react-bootstrap";
import PopularPosts from "../PopularPosts/PopularPosts";
import PostCategories from "../PostCategories/PostCategories";
import PostDesc from "./PostDesc";
import { BiSearchAlt } from "react-icons/bi";

const SinglePostPage = () => {
  return (
    <Container className=" grid lg:grid-cols-12">
      <div className=" lg:col-span-9 px-2 my-5">
        <PostDesc />
      </div>
      <div className=" lg:col-span-3 bg-slate-100 px-2 rounded-md my-5">
        <InputGroup className="my-3">
          <Form.Control
            placeholder="Search Posts"
            aria-label="Search Posts"
            aria-describedby="basic-addon2"
          />
          <Button variant=" secondary ">
            <BiSearchAlt size={25} />
          </Button>
        </InputGroup>
        <PostCategories />
        <div className=" p-4 ">
          <h6>TAGS</h6>
          <hr className=" bg-white " />
          <div className=" flex flex-wrap gap-1">
            <span className=" p-1 border-2 rounded-md ">DISH</span>
            <span className=" p-1 border-2 rounded-md "> MENU</span>
            <span className=" p-1 border-2 rounded-md "> FOOD </span>
            <span className=" p-1 border-2 rounded-md ">SWEET </span>
            <span className=" p-1 border-2 rounded-md ">TASTY</span>
            <span className=" p-1 border-2 rounded-md "> DEpCIOUS</span>
            <span className=" p-1 border-2 rounded-md "> DESSERTS </span>
            <span className=" p-1 border-2 rounded-md ">DRINKS</span>
          </div>
        </div>
        <PopularPosts />
      </div>
    </Container>
  );
};

export default SinglePostPage;
