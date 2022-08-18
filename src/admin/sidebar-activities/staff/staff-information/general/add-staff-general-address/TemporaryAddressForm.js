import React from "react";
import Break from "../../../Break";
import { useRoutes, Link } from "react-router-dom";
const TemporaryAddressForm = () => {
  //   const route = useRoutes();
  return (
    <>
      <Break title="Temporary address" />
      <form className="my-5">
        <label htmlFor="same">
          <input type="checkbox" id="same" className="rounded" />
          Same as permenant address
        </label>
      </form>
      <form className="form-solid mb-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="">
            <label className="my-6 text-sm" htmlFor="Student Id">
              Country*
            </label>
            <br />
            <select
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="text"
            >
              <option value="test">Select</option>
            </select>
          </div>
          <div className="">
            <label className="my-6 text-sm" htmlFor="Student Id">
              Province*
            </label>
            <br />
            <select
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="text"
            >
              <option value="test">Select</option>
            </select>
          </div>
          <div className="">
            <label className="my-6 text-sm" htmlFor="Student Id">
              District*
            </label>
            <br />
            <select
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="text"
            >
              <option value="test">Select</option>
            </select>
          </div>
          <div className="">
            <label className="my-6 text-sm" htmlFor="Student Id">
              Municipality/VDC*
            </label>
            <br />
            <select
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="text"
            >
              <option value="test">Select</option>
            </select>
          </div>
          <div className="">
            <label className="my-6 text-sm" htmlFor="Student Id">
              Ward*
            </label>
            <br />
            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="text"
              placeholder="Ward number"
            />
          </div>
          <div className="">
            <label className="my-6 text-sm" htmlFor="Student Id">
              Tole
            </label>
            <br />
            <input
              className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
              type="text"
              placeholder="Tole name"
            />
          </div>
        </div>
        <div className="w-full my-6">
          <div className=" w-fit ml-auto">
            <Link
              to="/staff/staff-information/add-staff/general/personal-details"
              className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
            >
              Back
            </Link>
            <Link
              to={`/staff/staff-information/add-staff/general/office-details`}
              className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
            >
              Next
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default TemporaryAddressForm;
