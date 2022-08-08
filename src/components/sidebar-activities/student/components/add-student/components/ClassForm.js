import React from "react";
import { useNavigate, Link } from "react-router-dom";

function ClassForm() {
  const navigate = useNavigate();
  return (
    <form className="form-solid my-6 rounded-md">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-6">
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Date of addmission*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="date"
            placeholder="Nepal"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Student ID*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="550632a"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Class/Semester*
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            name="class"
            id="class"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Faculty
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            name="class"
            id="class"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Section
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            name="class"
            id="class"
          >
            <option value="test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Previous school
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="AVM school"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Address of previous school*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Kalimati, Kathmandu"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Grade in previous school
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="3.45"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Status
          </label>
          <br />
          <select
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            name="status"
            id="status"
          >
            <option value="test">Select</option>
          </select>
        </div>
      </div>
      <div className="w-full">
        <div className=" w-fit ml-auto">
          <div
            onClick={() => {
              navigate(-1);
            }}
            className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm cursor-pointer"
          >
            Back
          </div>
          <Link
            to={`/student/student-information/add-fee-details`}
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Next
          </Link>
        </div>
      </div>
    </form>
  );
}

export default ClassForm;
