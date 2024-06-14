import { articleData } from "../utils/Articles";
import portraitImg from "../../../public/protrait.webp";
import { Container } from "react-bootstrap";
import { BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Trendings = () => {
  return (
    <Container className=" p-4">
      <div className=" flex justify-between items-center">
        <h5 className=" uppercase pt-2 "> Trendings </h5>
        <button className=" hover:underline ">See More</button>
      </div>
      <hr className=" bg-slate-50 " />

      <div className=" grid lg:grid-cols-12 gap-3">
        {/* big image  */}
        <div className=" lg:col-span-5 relative max-h-screen overflow-hidden ">
          <div className=" h-full rounded-md overflow-hidden ">
            <img
              src={portraitImg}
              alt="portraitImg"
              decoding="async"
              loading="lazy"
              className=" h-auto w-full bg-cover"
            />
            <div className=" rounded-md absolute top-0 left-0 h-full w-full bg-black/50 z-10 "></div>
            <div className=" absolute bottom-0 left-0 w-full p-4 z-20 ">
              <div className=" ">
                <p className="mb-3 bg-slate-200/30 backdrop-blur-sm text-white uppercase font-semibold rounded-md p-2 w-32 text-center">
                  Travel
                </p>
                <h4 className=" font-semibold text-start text-white ">
                  The 20 Biggest Fintech Companies In America 2019
                </h4>
                <div className=" flex flex-wrap justify-start items-center text-slate-200 text-sm mt-4 gap-2">
                  <span>John Doe</span>
                  <span className=" lg:ml-10 ">25/11/20</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* small cards */}
        <div className=" lg:col-span-7 grid lg:grid-cols-2 gap-3">
          {articleData.slice(0, 4).map((item, index) => (
            <NavLink
              key={index}
              to={item.title}
              className=" group relative text-decoration-none h-full rounded-md overflow-hidden "
            >
              <div className=" h-full rounded-md overflow-hidden ">
                <img
                  src={item.thumbnail}
                  alt="portraitImg"
                  decoding="async"
                  loading="lazy"
                  className=" h-full w-auto"
                />
                <div className=" rounded-md absolute top-0 left-0 h-full w-full bg-black/50 z-10 "></div>
                <div className=" absolute bottom-0 left-0 w-full p-4 z-20 ">
                  <div>
                    <button className="bg-slate-100/10 backdrop-blur-sm text-white rounded-md py-1 px-3 text-center">
                      {item.tags[0]}
                    </button>
                  </div>
                  <h5 className=" font-semibold text-start text-white mt-4 ">
                    The 20 Biggest Fintech Companies In America 2019
                  </h5>
                  <div className=" mt-4 flex items-center gap-2 text-slate-100 group-hover:underline group-hover:underline-offset-8 ">
                    <span>Read More </span>
                    <span>
                      <BiRightArrowAlt className=" group-hover:translate-x-2 transition-all duration-300 ease-in" />
                    </span>
                  </div>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Trendings;
