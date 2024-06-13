
const data = [
  {title: "Technology", length: 37},
  {title: "Lifestyle ", length: 24 },
  {title: "Fashion ", length: 59},
  {title: "Art ", length: 29},
  {title: "Food ", length: 15},
  {title: "Architecture", length: 9},
  {title: " Adventure", length: 47},
  
]

const PostCategories = () => {
  return (
    <div className=" pb-5 ">

      <h6 className=" uppercase px-3 "> Post Categories</h6>
      <hr className=" bg-white " />
      <div className=" space-y-3 p-2">
        {
          data.map((item, index)=>(
            <div key={index} className="py-1 even:bg-slate-50 rounded-md flex justify-between items-center px-3 hover:underline underline-offset-8 transition-all duration-300 ease-in">
              <span>{item.title}</span>
              <span>{item.length}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PostCategories