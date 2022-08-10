import React from "react";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <form className="form-solid w-full my-6 rounded-md">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <label className="my-6 text-sm" htmlFor="Student Id">
            Level*
          </label>

          <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div>
          <label className="my-6 text-sm" htmlFor="Student Id">
            Class/Semester
          </label>

          <select
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            placeholder="Science"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div>
          <label className="my-6 text-sm" htmlFor="Student Id">
            Faculty
          </label>

          <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div>
          <label className="my-6 text-sm" htmlFor="Student Id">
            Sections*
          </label>

          <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm ">
            <option value="Test">A</option>
            <option value="Test">B</option>
            <option value="Test">C</option>
          </select>
          <div className=" my-3">
            *Note : You can select multiple section at once
          </div>
        </div>
        <div className="sm:col-span-2 ">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Period*
          </label>

          <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn   border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm ">
            <option value="Test">Select</option>
            <option value="Test">B</option>
            <option value="Test">C</option>
          </select>
          <div className=" my-3">
            *Note : You can select multiple month at once
          </div>
        </div>
        <div>
          <label className="my-6 text-sm" htmlFor="Student Id">
            Amount*
          </label>

          <input
            placeholder="1000"
            type="number"
            name="ammount"
            className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
          />
        </div>
        <div className="h-fit pb-1 my-auto">
          <input
            id="discount"
            name="comments"
            type="checkbox"
            className="focus:ring- text-primary-btn focus:ring-0 focus:ring-offset-0 w-4 h-4 mr-2 border-gray-300 rounded"
          />
          <label className="my-6 text-sm" htmlFor="discount">
            It is discount
          </label>
        </div>
        <div className="sm:col-span-2">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Description*
          </label>

          <textarea className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn  min-h-[112px]    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            Picnic fee
          </textarea>
        </div>
      </div>

      <div className="w-full my-6">
        <div className=" w-fit ml-auto">
          <Link
            to="/fee/miscellaneous-fee-assign"
            className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
          >
            Cancel
          </Link>
          <Link
            to="/fee/miscellaneous-fee-assign"
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Save
          </Link>
        </div>
      </div>
    </form>
  );
}
