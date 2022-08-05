import React from "react";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <form className="form-solid w-full my-6 rounded-md">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <label className="my-6 text-sm" htmlFor="Student Id">
            Fee name*
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Monthly"
          />
        </div>
        <div>
          <label className="my-6 text-sm" htmlFor="Student Id">
            Level*
          </label>
          <br />
          <select className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
            <option value="test">Select</option>
          </select>
        </div>
        <div>
          <label className="my-6 text-sm" htmlFor="Student Id">
            Month*
          </label>
          <br />
          <select className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
            <option value="test">Select</option>
          </select>
          <div className="mt-3">
            *Note:You can select multiple months at once
          </div>
        </div>
        <div className="md:flex-row w-fit lg:col-span-3  flex flex-col my-6 ml-auto">
          <div className=" w-fit">
            <Link
              to="/fee/fee-type"
              className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
            >
              Cancel
            </Link>
            <Link
              to="/fee/fee-type"
              className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
            >
              Save
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
