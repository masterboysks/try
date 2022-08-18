import React from "react";
import Search from "@mui/icons-material/SearchOutlined";

const Form = () => {
  return (
    <div className="w-full lg:w-10/12 mb-14">
      <div className="p-4 my-6 rounded-md shadow xl:flex ring-black ring-opacity-5 ring-1 form-solid">
        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <div className="">
            <label className="my-6 text-sm" htmlFor="Date">
              Select date*
            </label>
            <br />
            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-40 text-primary-grey-700 text-sm"
              type="date"
              placeholder="Id"
            />
          </div>
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
            <label className="my-6 text-sm" htmlFor="Status">
              Status
            </label>
            <br />
            <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>
          <div className="box-border px-4 py-3 mt-auto ml-auto text-center text-white rounded cursor-pointer md:mx-0 md:ml-auto h-fit w-fit bg-primary-btn md:box-content xl:hidden">
            {/* <span className="text-sm sm:hidden text-primary-grey-100">Search</span> */}
            <Search className="w-4 mx-auto"></Search>
          </div>
        </div>
        <div className="box-border hidden px-2 py-2 mt-auto ml-3 text-center text-white rounded cursor-pointer w-fit h-fit bg-primary-btn xl:block">
          {/* <span className="text-sm sm:hidden text-primary-grey-100">Search</span> */}
          <Search className="w-4 mx-auto"></Search>
        </div>
      </div>
    </div>
  );
};

export default Form;
