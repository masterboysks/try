import Search from "@mui/icons-material/SearchOutlined";
import Breadnav from "../../breadnav";
import Table from "./Table";
const pages = [
  { name: "Fee", href: "#", current: false },
  {
    name: "Fee payment",
    href: "/fee/fee-payment/",
    current: true,
  },
];
export default function FeePayment() {
  return (
    <>
      <Breadnav pages={pages}></Breadnav>
      <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
        <div className="">
          <label className="my-6 text-sm" htmlFor="Desigation">
            Student ID
          </label>
          <br />
          <input
            placeholder="557332"
            type="text"
            className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
          ></input>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Desigation">
            Student name
          </label>
          <br />
          <input
            placeholder="557332"
            type="text"
            className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
          ></input>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Staff type">
            Level
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Status">
            Class/Semester
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Order By">
            Faculty
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn     border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Order By">
            Section
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn     border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="h-fit w-fit bg-primary-btn lg:col-span-3 xl:col-span-2 sm:box-content col-span-full box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 mx-auto"></Search>
        </div>
      </form>
      <Table></Table>
    </>
  );
}
