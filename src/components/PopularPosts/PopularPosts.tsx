import { articleData } from "../utils/Articles";

const PopularPosts = () => {
  return (
    <div className=" pt-2 pb-5 ">
      <h5 className=" uppercase "> Popular Posts</h5>
      <hr className=" bg-white " />
      <div className=" space-y-3">
        {articleData.map((item) => (
          <div key={item.id} className="flex gap-1 group cursor-pointer ">
            <div className=" max-w-32 overflow-hidden rounded-md">
              <img
                src={item.thumbnail}
                alt="item img"
                className=" w-auto h-full bg-cover group-hover:opacity-60 "
              />
            </div>
            <div className=" ">
              <h6 className=" text-sm group-hover:opacity-70 transition-all duration-300 ease-in line-clamp-2 ">
                {item.title}
              </h6>
              <div className=" text-slate-400 text-xs flex flex-wrap gap-2">
                <span>{item.createdBy}</span>
                <span>{item.datePublished}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularPosts;
