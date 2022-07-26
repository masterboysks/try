import Search from "@mui/icons-material/SearchOutlined";
import Breadnav from "../../../../components/Breadnav";

const pages = [
  { name: "Staff", href: "#", current: false },
  {
    name: "Staff Information",
    href: "/staff/staff-information/",
    current: true,
  },
];
const Form = () => {
  return (
    <>
      <Breadnav pages={pages} />
      <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
        <div className="">
          <label className="my-6 text-sm" htmlFor="Staff Id">
            Staff Id
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn mt-[6px]    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
            type="text"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Staff Name">
            Staff Name
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn mt-[6px]    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
            type="text"
            placeholder="Staff Name"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Department">
            Department
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Desigation">
            Desigation
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Staff type">
            Staff type
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Status">
            Status
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Order By">
            Order By
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn     border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="h-fit w-fit bg-primary-btn sm:box-content lg:col-span-2 xl:col-span-1 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 mx-auto"></Search>
        </div>
      </form>
    </>
  );
};

export default Form;
