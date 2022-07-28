import React from "react";

const PermanentAddressForm = () => {
  return (
    <form className="form-solid my-6 rounded-md">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Country*
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Nepal"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Province*
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Province 1"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            District*
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Dolpa"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Municipality/VDC*
          </label>
          <br />
          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            type="text"
            placeholder="Bagmati"
          />
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
    </form>
  );
};

export default PermanentAddressForm;
