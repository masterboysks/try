import Search from "@mui/icons-material/SearchOutlined";

export default function Form() {
  return (
    <form className="form-solid w-full my-6 rounded-md">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Level
          </label>
          <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Class/Semester
          </label>
          <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Faculty
          </label>
          <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="h-fit mt-auto -mb-1 lg:col-span-full xl:col-auto ">
          <div className="h-fit w-fit bg-primary-btn sm:box-content col-span-full xl:ml-0 sm:py-2 box-border px-4 py-3 mt-auto mb-1 ml-auto text-white rounded cursor-pointer">
            {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
            <Search className="w-4 mx-auto"></Search>
          </div>
        </div>
      </div>
    </form>
  );
}
