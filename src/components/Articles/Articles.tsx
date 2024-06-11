import { articleData } from "../utils/Articles";

const Articles = () => {
  return (
    <div className=" pt-2 pb-5">
      <h5 className=" uppercase mb-4">
        <span className=" underline ">Latest</span>{" "}Articles
      </h5>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-10">
        {articleData.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 group cursor-pointer ">
            <div className=" overflow-hidden rounded-md">
              <img src={item.thumbnail} alt="item img" className=" w-full h-auto bg-cover group-hover:opacity-60 " />
            </div>
            <div className=" space-y-3">
              <button className="text-sm bg-slate-100 p-1 rounded-md ">{item.tags[0]}</button>
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
