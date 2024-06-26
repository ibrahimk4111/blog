import { articleData } from "../utils/Articles";

const PopularPosts = () => {
  return (
    <div className=" bg-slate-100 p-2 ">
      <h6 className=" uppercase px-3"> Popular Posts</h6>
      <hr className=" bg-white " />
      <div className=" space-y-3 p-2">
        {articleData.slice(0,4).map((item) => (
          <div key={item.id} className="flex gap-2 group cursor-pointer ">
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
