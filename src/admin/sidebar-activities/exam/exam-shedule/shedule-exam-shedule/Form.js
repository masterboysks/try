import Search from "@mui/icons-material/SearchOutlined";
import { GlobeAltIcon, PrinterIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import { Select } from "../../../../components/fields";
import { useState } from "react";
export default function Form() {
  const arrayClassSemester = ["fdjh", "fdsjkhg", "dsjhfg"];
  const arrayFaculty = ["fdjh", "fdsjkhg", "dsjhfg"];
  const [classSemester, setClassSemester] = useState("Select");
  const [faculty, setFaculty] = useState("Select");
  return (
    <>
      <div className="flex items-center justify-between my-6">
        <div className=" flex items-center gap-3">
          <div className="flex items-center">
            <div className="text-primary-btn font-semibold">Publish</div>
            <div className="icon text-primary-btn w-5 ml-2">
              <GlobeAltIcon fontSize="medium" />
            </div>
          </div>
          <div className="text-primary-btn font-semibold">Print</div>
          <div className="icon text-primary-btn w-5">
            <PrinterIcon />
          </div>
          <div className="">
            <Link
              to="add"
              className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
            >
              Add
            </Link>
          </div>
        </div>
      </div>
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          {/* <div className="">
            <label className="my-6 text-sm" htmlFor="Student Id">
              Level
            </label>
            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div> */}
          <div className="">
            <Select
              label="CLass/Semester"
              value={arrayClassSemester}
              setSelected={setClassSemester}
              selected={classSemester}
            />
          </div>
          <div className="">
            <Select
              label="Faculty"
              value={arrayFaculty}
              selected={faculty}
              setSelected={setFaculty}
            />
          </div>
          <div className="h-fit col-span-full lg:col-auto mt-auto -mb-1">
            <div className="h-fit w-fit bg-primary-btn sm:box-content col-span-full lg:ml-0 sm:py-2 box-border px-4 py-3 mt-auto mb-1 ml-auto text-white rounded cursor-pointer">
              {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
              <Search className="w-4 mx-auto"></Search>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
