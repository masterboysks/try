import React from "react";
import Search from "@mui/icons-material/SearchOutlined";

export default function Filter() {
  return (
    <div className=" my-6">
      <div className="flex justify-between">
        <span className="mt-auto">Filter by:</span>
        <div className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 h-fit w-fit lg:block items-center justify-center hidden px-3 py-2 mt-auto text-sm font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer">
          Upgrade
        </div>
      </div>
      <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-2 rounded-md shadow">
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
      </form>
    </div>
  );
}
