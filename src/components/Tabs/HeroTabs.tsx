import { Container } from "react-bootstrap";
import img1 from "../../../public/img_1.webp";
import img2 from "../../../public/img_2.webp";
import img3 from "../../../public/img_3.webp";

const data = [
  {
    title: "Travel",
    img: img1,
    bg: "bg-orange-500",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
  },
  {
    title: "Lifestyle",
    img: img2,
    bg: "bg-red-500",
    desc: "The 20 Biggest Fintech Companies In America 2019",
  },
  {
    title: "Business",
    img: img3,
    bg: "bg-green-500",
    desc: "The 20 Biggest Fintech Companies In America 2019 ",
  }
];

const HeroTabs = () => {
  return (
    <div>
      <Container className=" py-5 ">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3 ">
          {data.map((item, index) => (
            <div key={index} className=" flex lg:gap-5 gap-3 group cursor-pointer ">
              <div className=" max-w-28 ">
                <img src={item.img} alt="item img" decoding="async" loading="lazy" className=" w-full h-auto bg-cover rounded-md group-hover:opacity-60" />
              </div>
              <div>
                <button className={`${item.bg} uppercase font-semibold rounded-md px-2 text-white w-32 text-center`}>{item.title}</button>
                <p className=" text-sm mt-2 ">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default HeroTabs;
