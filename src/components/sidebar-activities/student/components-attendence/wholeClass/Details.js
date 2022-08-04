import React from "react";

const Details = () => {
  return (
    <div className="my-12 lg:flex">
      <div className="p-4 rounded-md shadow ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2">
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Class:</span>
            <span className="text-primary-grey-700">1</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Section:</span>
            <span className="text-primary-grey-700">B</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">Level:</span>
            <span className="text-primary-grey-700">School level</span>
          </div>
          <div className="flex justify-between py-2 border-b-[1px] border-b-primary-grey-300 ">
            <span className="text-primary-grey-600">No of students:</span>
            <span className="text-primary-grey-700">1</span>
          </div>
          <div className="flex justify-between py-2 ">
            <span className="text-primary-grey-600">Faculty:</span>
            <span className="text-primary-grey-700"></span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center p-3 my-6 ml-auto text-sm font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer w-fit lg:h-fit bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 lg:mx-3 lg:my-0 lg:mt-auto ">
        Attendence Report
      </div>
    </div>
  );
};

export default Details;
