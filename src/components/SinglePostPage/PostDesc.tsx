import { GiSelfLove } from "react-icons/gi";
import img4 from "../../../public/img_4.webp";
import {
  FaBehance,
  FaDribbble,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { BiComment } from "react-icons/bi";

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
      <div className=" space-y-5 lg:p-10">
        <h2>Cartridge Is Better Than Ever A Discount Toner</h2>

        {/* creator info */}
        <div className=" my-5 flex flex-wrap justify-between items-center">
          <div className=" flex flex-wrap justify-start items-center text-sm gap-2 text-slate-500">
            <img
              src={img4}
              alt="avater img"
              className=" rounded-full w-10 h-10 "
            />
            <span>John Doe</span>
            <span className=" lg:ml-10 ">2024-12-20</span>
          </div>
          <div className=" flex items-center gap-2">
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
        </div>

        {/* description */}
        <div>
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
      </div>
    </div>
  );
};

export default PostDesc;

{
  /* <button className="bg-slate-200/30 backdrop-blur-sm rounded-md p-1 min-w-32 text-center">Travel</button> */
}
