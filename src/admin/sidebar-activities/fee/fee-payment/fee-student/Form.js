import React from "react";
import { Link } from "react-router-dom";

export default function Form() {
  return (
    <>
      <form className="mt-11 lg:w-9/12 xl:w-2/3 md:grid-cols-2 grid w-full grid-cols-1 gap-4">
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Total Ammount:
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            disabled
            type="Number"
            placeholder=""
          />
        </div>
        <div>
          <label className="py-6 text-sm" htmlFor="Student Id">
            Paid amount*:
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field bg-white shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="number"
            placeholder="Rs.12"
          />
        </div>
        <div>
          <label className="py-6 text-sm" htmlFor="Student Id">
            Discount:
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field bg-white shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Rs.0"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Due Ammount:
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="Number"
            placeholder=""
          />
        </div>
        <div>
          <label className="py-6 text-sm" htmlFor="Student Id">
            Fine:
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field bg-white shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Rs.999999999999999999999999999999999999"
          />
        </div>
        <div>
          <label className="py-6 text-sm" htmlFor="Student Id">
            Payment type*:
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field bg-white shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Rs.0"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Grand total:
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            disabled
            type="Number"
            placeholder=""
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Remark*
          </label>
          <br />
          <textarea
            name="notice"
            id="notice"
            row={5}
            placeholder=" Description here"
            className="  mt-[6px] w-full p- rounded  focus:ring-primary-btn  h-28  border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
          ></textarea>
        </div>
      </form>
      <div className="w-full my-6">
        <div className=" w-fit ml-auto">
          <Link
            to="/fee/fee-payment"
            className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm cursor-pointer"
          >
            Cancel
          </Link>
          <Link
            to={`/fee/fee-payment`}
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Save
          </Link>
        </div>
      </div>
    </>
  );
}
