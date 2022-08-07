import Search from "@mui/icons-material/SearchOutlined";
import LanguageIcon from "@mui/icons-material/Language";
import Table from "./Table";
import Breadnav from "../../../breadnav";
const pages = [
  { name: "Fee", href: "#", current: false },
  {
    name: "Fee statement",
    href: "#",
    current: false,
  },
  {
    name: "Class fee statement",
    href: "/fee/fee-statement/class-fee-statement",
    current: true,
  },
];
export default function ClassFeeStatement() {
  return (
    <>
      <Breadnav pages={pages} />
      <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 mb-12 rounded-md shadow">
        <div className="">
          <label className="my-6 text-sm" htmlFor="Desigation">
            Level*
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Staff type">
            Class/Semester*
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Status">
            Faculty
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Order By">
            Section*
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn     border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="h-fit w-fit bg-primary-btn lg:col-span-2 xl:col-span-full sm:box-content col-span-full box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 mx-auto"></Search>
        </div>
      </form>
      <div className="text-primary-btn w-full">
        <div className="w-fit flex items-center ml-auto">
          <div className="">Publish invoice</div>
          <div className=" text-primary-btn ml-2">
            <LanguageIcon />
          </div>
        </div>
      </div>
      <Table></Table>
    </>
  );
}
