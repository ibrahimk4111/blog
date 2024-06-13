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
        <div className=" lg:col-span-7 grid lg:grid-cols-3 gap-y-5 gap-x-2">
          {articleData.map((item) => (
            <NavLink to={item.title} className=" text-decoration-none h-full rounded-md overflow-hidden ">
              <div
                key={item.id}
                className=" h-full group cursor-pointer bg-slate-100 rounded-md flex flex-col justify-start gap-3"
              >
                <div className=" overflow-hidden">
                  <img
                    src={item.thumbnail}
                    alt="item img"
                    className=" w-full h-auto bg-cover group-hover:opacity-60 "
                  />
                </div>
                <div className=" flex flex-col justify-between gap-1 py-2 px-4 ">
                  <div className=" text-slate-400 text-sm flex flex-wrap justify-between items-center">
                    <span> {item.tags[0]} </span>
                    <span> - </span>
                    <span>{item.datePublished}</span>
                  </div>
                  <h6 className=" group-hover:underline text-slate-600 mt-2 ">
                    {item.title}
                  </h6>
                  <button className=" p-1 text-orange-500 flex items-center gap-2">
                    <span>Read More </span>
                    <BiRightArrowAlt className=" group-hover:translate-x-3 transition-all duration-300 ease-in " />
                  </button>
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
