import React from "react";
import { Link } from "react-router-dom";
import Break from "./Break";

const GuardianFormFalse = () => {
  return (
    <form className="rounded-md  my-6 form-solid">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        <div>
          <label className="py-6 text-sm" htmlFor="Student Id">
            First Name*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="First name"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Middle Name
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Middle name"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Last Name*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Mobile Number*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="number"
            placeholder="Mobile number"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Email
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="Email"
            placeholder="mail@gmail.com"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Occupation*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Occupation"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Relation*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Mother"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Username*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn   font-sm border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Username"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Password*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="password"
            placeholder="Password"
          />
        </div>
      </div>
      <Break title="Father details" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6">
        <div>
          <label className="py-6 text-sm" htmlFor="Student Id">
            First Name*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="First name"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Middle Name
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Middle name"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Last Name*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Mobile Number*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="number"
            placeholder="Mobile number"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Email
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="Email"
            placeholder="mail@gmail.com"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Occupation*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Occupation"
          />
        </div>
      </div>
      <Break title="Mother details" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-6">
        <div>
          <label className="py-6 text-sm" htmlFor="Student Id">
            First Name*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="First name"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Middle Name
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Middle name"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Last Name*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Last name"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Mobile Number*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="number"
            placeholder="Mobile number"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Email
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="Email"
            placeholder="mail@gmail.com"
          />
        </div>
        <div className="">
          <label className="py-6 text-sm" htmlFor="Student Id">
            Occupation*
          </label>
          <br />
          <input
            className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Occupation"
          />
        </div>
      </div>
      <div className="w-full">
        <div className=" ml-auto w-fit">
          <Link
            to="/student/student-information/add-student-details"
            className="inline-flex items-center mr-3     justify-center rounded-md border border-transparent bg-primary-grey-50 px-4 py-3 text-sm font-medium text-primary-grey-700 shadow-sm hover: focus:outline-none focus:ring- focus:ring- focus:ring-offset-2 sm:w-auto"
          >
            Back
          </Link>
          <Link
            to={`/student/student-information/add-student-details/`}
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary-btn px-4 py-3 text-sm font-medium text-white shadow-sm hover: focus:outline-none focus:ring- focus:ring- focus:ring-offset-2 sm:w-auto"
          >
            Next
          </Link>
        </div>
      </div>
    </form>
  );
};

export default GuardianFormFalse;
