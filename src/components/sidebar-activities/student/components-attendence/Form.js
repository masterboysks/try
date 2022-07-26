import React from "react";
import Search from "@mui/icons-material/SearchOutlined";
const Form = () => {
  return (
    <div className="w-full p-4 my-6 rounded-md shadow ring-black ring-opacity-5 ring-1 form-solid mb-14">
      <form className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {" "}
        <div className="">
          <label className="my-6 text-sm" htmlFor="Status">
            Status
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>{" "}
        <div className="">
          <label className="my-6 text-sm" htmlFor="Status">
            Status
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>{" "}
        <div className="">
          <label className="my-6 text-sm" htmlFor="Status">
            Status
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>{" "}
        <div className="">
          <label className="my-6 text-sm" htmlFor="Status">
            Status
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="col-span-full lg:col-span-2 xl:col-span-full">
          <div className="flex items-center justify-center p-2 ml-auto text-sm font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer bg-primary-btn h-fit w-fit hover: focus:outline-none focus:ring- focus:ring-offset-2">
            <Search />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
