import { Container } from "react-bootstrap";
import { tabsData } from "../utils/Tabs";
const HeroTabs = () => {
  return (
    <div className="my-20 ">
      <Container className=" flex justify-center items-center ">
        <div className=" lg:max-w-[80vw] grid lg:grid-cols-3 md:grid-cols-2 gap-3 ">
          {tabsData.map((item, index) => (
            <div key={index} className=" flex lg:gap-5 gap-3 group cursor-pointer ">
              <div className=" max-w-28 ">
                <img src={item.img} alt="item img" decoding="async" loading="lazy" className=" w-full h-auto bg-cover rounded-md group-hover:opacity-60" />
              </div>
              <div className=" flex flex-col gap-1">
                <button className={`${item.bg} uppercase font-semibold rounded-md px-2 text-white w-32 text-center`}>{item.tag}</button>
                <span className=" text-sm mt-2 ">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HeroTabs;
