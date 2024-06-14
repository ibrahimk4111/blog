import { GiSelfLove } from "react-icons/gi";
import img4 from "/img_4.webp";
import avater from "/avater2.webp";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";
import { BiComment } from "react-icons/bi";
import { Form, InputGroup } from "react-bootstrap";

const PostDesc = () => {
  return (
    <div className=" space-y-5 ">
      <div className=" max-h-[50vh] overflow-hidden ">
        <img
          src={img4}
          alt="img4"
          decoding="async"
          className=" w-full h-auto "
        />
      </div>
      <div className=" space-y-5 lg:p-10 ">
        <h2>Cartridge Is Better Than Ever A Discount Toner</h2>

        {/* creator info */}
        <div className=" my-5 flex items-center gap-3 text-slate-500 ">
          <div className=" text-sm gap-2 text-slate-500">
            <img
              src={avater}
              alt="avater img"
              className=" rounded-full w-auto h-14 "
            />
          </div>
          <div className=" flex flex-wrap justify-between items-center gap-2 w-full">
            <span>John Doe</span>
            <div className=" flex flex-wrap items-center gap-2">
              <span>Share:</span>
              <div className=" flex gap-2 ">
                <FaFacebookF
                  size={16}
                  className=" cursor-pointer hover:scale-125 transition-all duration-300 ease-in"
                />
                <FaInstagram
                  size={16}
                  className=" cursor-pointer hover:scale-125 transition-all duration-300 ease-in"
                />
                <FaDribbble
                  size={16}
                  className=" cursor-pointer hover:scale-125 transition-all duration-300 ease-in"
                />
                <FaBehance
                  size={16}
                  className=" cursor-pointer hover:scale-125 transition-all duration-300 ease-in"
                />
              </div>
            </div>
            <span className=" ml-5 ">2024-12-20</span>
          </div>
        </div>

        {/* description */}
        <div className=" text-slate-500 ">
          <p>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </p>
          <p>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </p>
          <p className=" m-4 shadow-xl border-2 border-l-orange-500 p-4 rounded-md ">
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </p>
          <p>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </p>
          <p>
            MCSE boot camps have its supporters and its detractors. Some people
            do not understand why you should have to spend money on boot camp
            when you can get the MCSE study materials yourself at a fraction of
            the camp price. However, who has the willpower
          </p>
          <hr className=" bg-white " />
        </div>
        <div className=" flex items-center justify-end gap-2 ">
          <span>TAGS : </span>
          <div className=" flex flex-wrap gap-2">
            <span className=" text-slate-500 hover:text-black ">DISH</span>
            <span className=" text-slate-500 hover:text-black "> MENU</span>
            <span className=" text-slate-500 hover:text-black "> FOOD </span>
          </div>
        </div>
        <div className=" flex justify-between items-center gap-1">
          <div className=" flex items-center gap-2">
            <GiSelfLove />
            <span>4 peoples liked </span>
          </div>
          <div className=" flex items-center gap-2">
            <BiComment /> <span>06 Comments</span>
          </div>
        </div>

        {/* comments section */}
        <div>
          <h4 className=" my-5 ">6 Comments</h4>
          <InputGroup className="my-4 rounded-md overflow-hidden">
            <Form.Control placeholder="Write your comment here" />
            <button className=" bg-slate-100 hover:bg-slate-200 px-3">
              <FaTelegramPlane className=" text-orange-400" size={25} />
            </button>
          </InputGroup>
          <div className=" space-y-10">
            {Array.from({ length: 5 }).map((_, index) => (
              <div key={index} className=" flex gap-2 p-2 ">
                <div className=" min-w-20 ">
                  <img
                    src={avater}
                    alt="avater"
                    decoding="async"
                    loading="lazy"
                    className=" rounded-full w-auto h-14"
                  />
                </div>
                <div>
                  <h5 className=" uppercase">John Does alb</h5>
                  <p className=" uppercase text-slate-400 ">
                    January 9, 2024 At 2.21 PM
                  </p>
                  <p className=" text-slate-500">
                    Cupiditate ipsam fuga veritatis impedit facilis voluptates
                    incidunt et error architecto fugit totam aspernatur sint
                    quisquam cumque officiis distinctio consequatur, voluptas
                    voluptatum!
                  </p>
                  <button className=" bg-slate-100 hover:bg-slate-200 hover:ring-1 rounded-md py-1 px-3 ">
                    Reply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDesc;

{
  /* <button className="bg-slate-200/30 backdrop-blur-sm rounded-md p-1 min-w-32 text-center">Travel</button> */
}
