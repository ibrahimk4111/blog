import { Container } from "react-bootstrap";
import CarouselSlide from "../Carousel/CarouselSlide";
import HeroTabs from "../Tabs/HeroTabs";
import Trendings from "../Trendings/Trendings";
import Articles from "../Articles/Articles";
import PopularPosts from "../PopularPosts/PopularPosts";
import PostCategories from "../PostCategories/PostCategories";

const Home = () => {
  return (
    <>
      <CarouselSlide />
      <HeroTabs />
      <Trendings />
      <Container className=" grid lg:grid-cols-12">
        <div className=" lg:col-span-9 px-2 my-5">
          <Articles />
        </div>
        <div className=" lg:col-span-3 bg-slate-100 px-2 rounded-md my-5">
          <PopularPosts />
          <PostCategories />
        </div>
      </Container>
    </>
  )
}

export default Home