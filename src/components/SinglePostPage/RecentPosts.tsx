import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { articleData } from "../utils/Articles";
import { BiRightArrowAlt } from "react-icons/bi";

const RecentPosts = () => {
  return (
    <Container className="p-2 my-10 ">
      <div className=" flex justify-between items-center">
        <h5 className=" uppercase pt-2 "> Recent Posts </h5>
        <button className=" hover:underline ">See More</button>
      </div>
      <hr className=" bg-slate-50 " />

      {/* small cards */}
      <div className=" grid lg:grid-cols-4 md:grid-cols-2 gap-3">
        {articleData.slice(0,4).map((item, index) => (
          <NavLink
            key={index}
            to="#"
            className=" group relative text-decoration-none h-full rounded-md overflow-hidden "
          >
            <div className=" h-100 rounded-md overflow-hidden ">
              <img
                src={item.thumbnail}
                alt="portraitImg"
                decoding="async"
                loading="lazy"
                className=" h-full w-auto bg-cover"
              />
              <div className=" rounded-md absolute top-0 left-0 h-full w-full bg-black/50 z-10 "></div>
              <div className=" absolute bottom-0 left-0 w-full p-3 z-20 ">
                <div>
                  <button className="bg-slate-100/10 backdrop-blur-sm text-white rounded-md py-1 px-3 text-center">
                    {item.tags[0]}
                  </button>
                </div>
                <p className=" font-semibold text-start text-white mt-2 ">
                  The 20 Biggest Fintech Companies In America 2019
                </p>
                <div className=" mt-2 flex items-center gap-2 text-slate-100 group-hover:underline group-hover:underline-offset-8 ">
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
    </Container>
  );
};

export default RecentPosts;
