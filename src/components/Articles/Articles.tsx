import { articleData } from "../utils/Articles";
import img2 from "../../../public/img_2.webp";
import { CgCalendarDates } from "react-icons/cg";

const Articles = () => {
  return (
    <div className=" pb-5 px-2">
      <h5 className=" uppercase py-2">
        <span className=" underline ">Latest</span> Articles
      </h5>
      <hr className=" bg-slate-50 " />

      {/* big image  */}
      <div className=" bg-slate-100 rounded-md overflow-hidden flex lg:flex-row flex-col justify-start items-center mb-5 group cursor-pointer relative ">
        <div>
          <img src={img2} alt="big img" decoding="async" loading="lazy" className=" lg:w-[70%]" />
        </div>
        <div className=" lg:absolute lg:left-80 lg:w-[50%] lg:bg-white p-4">
          <div className=" text-slate-500 flex flex-wrap justify-start items-center gap-3 py-3 ">
            <button className="text-sm bg-slate-100 p-1 px-2 rounded-md ">
              Lifestyle
            </button>
            <span>By: John Doe</span>
            <div className=" flex justify-start items-center gap-1">
              <CgCalendarDates /> <span>2022/02/20</span>
            </div>
          </div>
          <h5 className=" text-slate-600 group-hover:text-black">Nest Protect: 2nd Gen Smoke + CO Alarm.</h5>
          <p className=" text-sm text-slate-500 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae commodi sequi explicabo alias eos quidem iure, earum odio voluptates soluta necessitatibus amet aliquid eligendi iste atque. Ad tenetur totam eum!</p>
        </div>
      </div>

      {/* small cards */}
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-10">
        {articleData.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 group cursor-pointer bg-slate-100 rounded-md overflow-hidden"
          >
            <div className=" overflow-hidden ">
              <img
                src={item.thumbnail}
                alt="item img"
                className=" w-full h-auto bg-cover group-hover:opacity-60 "
              />
            </div>
            <div className=" space-y-3 p-4">
              <button className="text-sm bg-slate-50 p-1 rounded-md ">
                {item.tags[0]}
              </button>
              <h6 className=" group-hover:underline">{item.title}</h6>
              <div className=" flex justify-between text-slate-400 text-sm mt-3">
                <span>By: {item.createdBy}</span>
                <span>{item.datePublished}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
