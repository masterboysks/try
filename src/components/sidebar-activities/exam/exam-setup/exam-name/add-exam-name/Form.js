import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
export default function Form() {
  const [examName, setExamName] = useState([]);
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
        <div className="lg:row-start-auto row-start-2">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Exam name*
          </label>

          <input
            className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            placeholder="First term"
            type="text"
          />
          <>
            {examName.map((c, i) => (
              <div className=" relative">
                <input
                  key={i}
                  className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                  placeholder="Preboard"
                  type="text"
                />
                <div
                  className=" -right-10 text-primary-grey-700 top-[10px] absolute p-1 bg-white rounded-full shadow"
                  onClick={() => {
                    setExamName(examName.slice(0, -1));
                  }}
                >
                  <CloseOutlinedIcon fontSize="small" />
                </div>
              </div>
            ))}
          </>

          <div
            className="text-primary-grey-700 flex items-center justify-end mt-3"
            onClick={() => {
              setExamName([...examName, 1]);
            }}
          >
            <div className="">Add</div>
            <div className="icon border-primary-field p-1 ml-2 border rounded-lg">
              <AddOutlinedIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="md:flex-row w-fit lg:col-span-2 flex flex-col my-6 ml-auto">
          <div className=" w-fit">
            <Link
              to="/exam/exam-setup/exam-name"
              className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
            >
              Cancel
            </Link>
            <Link
              to="/exam/exam-setup/exam-name"
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
