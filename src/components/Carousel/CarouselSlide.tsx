import { Carousel } from "react-bootstrap";
import { tabsData } from "../utils/Tabs";

const CarouselSlide = () => {
  return (
    <div>
      <Carousel className=" relative" variant=" dark " fade>
        {tabsData.map((item, index) => (
          <Carousel.Item className=" max-h-[90vh] overflow-hidden " key={index}>
            <div className=" flex justify-center items-center">
              <img
                src={item.img}
                alt="carousel img"
                decoding="async"
                loading="lazy"
                className=" w-full h-auto bg-cover "
              />
            </div>
            <div className=" bg-black/40 absolute top-0 left-0 w-full h-full z-10 "></div>
            <Carousel.Caption className=" z-20 flex flex-col justify-center items-start h-full " >
              <div className=" text-white ">
                <p className={`${item.bg} lg:mb-10 md:block hidden uppercase font-semibold rounded-md p-2 text-white w-32 text-center`}>{item.tag}</p>
                <p className=" font-semibold text-start lg:w-[60%] lg:text-4xl text-xl ">{item.title}</p>
                <div className=" flex flex-wrap justify-start items-center text-slate-200 text-sm mt-4 gap-2">
                  <img src={item.avatar} alt="avater img" className=" rounded-full w-6 h-6 " />
                  <span>By: {item.createdBy}</span>
                  <span className=" lg:ml-10 ">{item.datePublished}</span>
                </div>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlide;
