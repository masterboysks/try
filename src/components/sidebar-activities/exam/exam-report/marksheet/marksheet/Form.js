import Search from "@mui/icons-material/SearchOutlined";
export default function Form() {
  return (
    <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
      <div className="">
        <label className="my-6 text-sm" htmlFor="Student Id">
          Student Id
        </label>
        <br />
        <input
          className="w-full p- rounded  focus:ring-primary-btn mt-[6px]    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
          type="text"
          placeholder="Id"
        />
      </div>
      <div className="">
        <label className="my-6 text-sm" htmlFor="Student Name">
          Student Name
        </label>
        <br />
        <input
          className="w-full p- rounded  focus:ring-primary-btn mt-[6px]    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
          type="text"
          placeholder="Student Name"
        />
      </div>
      <div className="">
        <label className="my-6 text-sm" htmlFor="Status">
          Level
        </label>
        <br />
        <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
          <option value="Test">Select</option>
        </select>
      </div>
      <div className="">
        <label className="my-6 text-sm" htmlFor="Class / Semester">
          Class / Semester
        </label>
        <br />
        <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
          <option value="Test">Select</option>
        </select>
      </div>
      <div className="">
        <label className="my-6 text-sm" htmlFor="Faculty">
          Faculty
        </label>
        <br />
        <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
          <option value="Test">Select</option>
        </select>
      </div>
      <div className="">
        <label className="my-6 text-sm" htmlFor="Section">
          Section
        </label>
        <br />
        <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
          <option value="Test">Select</option>
        </select>
      </div>

      <div className="h-fit w-fit bg-primary-btn sm:box-content lg:col-span-3 xl:col-span-2 sm:col-span-2 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
        {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
        <Search className="w-4 mx-auto"></Search>
      </div>
    </form>
  );
}
