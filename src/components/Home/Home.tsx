import { Container } from "react-bootstrap";
import CarouselSlide from "../Carousel/CarouselSlide";
import HeroTabs from "../Tabs/HeroTabs";
import Trendings from "../Trendings/Trendings";
import Articles from "../Articles/Articles";
import PopularPosts from "../PopularPosts/PopularPosts";
import PostCategories from "../PostCategories/PostCategories";
import img2 from "/img_2.webp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/postSlice";
import { AppDispatch, RootState } from "../../redux/createStore";

const Home = () => {
  const dispatch = useDispatch<AppDispatch>();
  const blogs = useSelector((state: RootState)=>state.posts)
  useEffect(() => {
      dispatch(fetchPosts());
  }, []);

  console.log(blogs)

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
          {/* big image  */}
          <div className=" lg:col-span-5 relative max-h-screen overflow-hidden my-5 ">
            <div className=" h-full rounded-md overflow-hidden ">
              <img
                src={img2}
                alt="img 2"
                decoding="async"
                loading="lazy"
                className=" h-auto w-full bg-cover"
              />
              <div className=" rounded-md absolute top-0 left-0 h-full w-full bg-black/50 z-10 "></div>
              <div className=" absolute bottom-0 left-0 w-full p-4 z-20 ">
                <div className=" ">
                  <h6 className=" font-semibold text-start text-white ">
                    The 20 Biggest Fintech Companies In America 2019
                  </h6>
                  <div className="text-slate-200 text-sm mt-3 gap-2">
                    <span>John Doe</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PostCategories />
        </div>
      </Container>
    </>
  );
};

export default Home;
