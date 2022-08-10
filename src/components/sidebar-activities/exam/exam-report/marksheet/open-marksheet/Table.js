import { PrinterIcon } from "@heroicons/react/solid";
import Search from "@mui/icons-material/SearchOutlined";
import { useState } from "react";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
const data = [
  {
    subject: "Physics",
    fullTheory: 100,
    fullPartical: 0,
    fullAssest: 0,
    fullTotal: 100,

    obtainedTheory: 32,
    obtainedPratical: 0,
    obtainedAssest: 0,
    obtainedTotal: 32,
    obtainedHigest: 99,
    result: "pass",
  },
  {
    subject: "Physics",
    fullTheory: 100,
    fullPartical: 0,
    fullAssest: 0,
    fullTotal: 100,

    obtainedTheory: 32,
    obtainedPratical: 0,
    obtainedAssest: 0,
    obtainedTotal: 32,
    obtainedHigest: 99,
    result: "pass",
  },
  {
    subject: "Physics",
    fullTheory: 100,
    fullPartical: 0,
    fullAssest: 0,
    fullTotal: 100,

    obtainedTheory: 32,
    obtainedPratical: 0,
    obtainedAssest: 0,
    obtainedTotal: 32,
    obtainedHigest: 99,
    result: "pass",
  },
  {
    subject: "Physics",
    fullTheory: 100,
    fullPartical: 0,
    fullAssest: 0,
    fullTotal: 100,

    obtainedTheory: 32,
    obtainedPratical: 0,
    obtainedAssest: 0,
    obtainedTotal: 32,
    obtainedHigest: 99,
    result: "pass",
  },
];
const total = data.reduce((prv, curr) => {
  return curr.obtainedTotal + prv;
}, 0);

const Table = () => {
  return (
    <>
      {/* search */}
      <div className="lg:w-11/12 mb-14 w-full">
        <div className="xl:flex ring-black ring-opacity-5 ring-1 form-solid p-4 my-6 rounded-md shadow">
          <div className="md:grid-cols-2 xl:grid-cols-3 grid flex-1 grid-cols-1 gap-4">
            <div className="">
              <label className="my-6 text-sm" htmlFor="Status">
                Academic year*
              </label>
              <br />
              <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
                <option value="Test">Select</option>
              </select>
            </div>
            <div className="">
              <label className="my-6 text-sm" htmlFor="Status">
                Exam name*
              </label>
              <br />
              <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
                <option value="Test">Select</option>
              </select>
            </div>
            <div className="">
              <label className="my-6 text-sm" htmlFor="Status">
                Grading system
              </label>
              <br />
              <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
                <option value="percentage">Percent</option>
                <option value="grade" defaultValue={true}>
                  Grade
                </option>
              </select>
            </div>
            <div className="md:mx-0 md:ml-auto h-fit w-fit bg-primary-btn md:box-content xl:hidden box-border px-4 py-3 mt-auto ml-auto text-center text-white rounded cursor-pointer">
              <Search className="w-4 mx-auto"></Search>
            </div>
          </div>
          <div className="w-fit h-fit bg-primary-btn xl:block box-border hidden px-2 py-2 mt-auto ml-3 text-center text-white rounded cursor-pointer">
            <Search className="w-4 mx-auto"></Search>
          </div>
        </div>
      </div>
      {/* Table heading */}
      <div className="flex items-center justify-between">
        <div className="md:block hidden text-xl">First Term Examination</div>
        <div className="flex items-center gap-3">
          <div className="text-primary-btn font-semibold">Print</div>
          <div className="icon text-primary-btn w-5">
            <PrinterIcon />
          </div>
        </div>
      </div>
      {/* table */}
      <div className="">
        <div className="my-6">
          <div className=" ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow">
            <div className="inline-block w-full align-middle">
              <div className=" w-full rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 table-auto">
                  <thead className="bg-gray-50 divide-y">
                    <tr className="divide-x">
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        Subject
                      </th>
                      <th
                        scope="col"
                        colSpan="4"
                        className="px-3    py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        Full marks
                      </th>

                      <th
                        scope="col"
                        colSpan="6"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        Obtained marks
                      </th>
                    </tr>
                    <tr>
                      {/* subject col empty */}
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                      ></th>
                      {/*full marks  */}
                      <th
                        scope="col"
                        className="px-3 border-l py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]  "
                      >
                        Theory
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                      >
                        Pratical
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                      >
                        Assest
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                      >
                        Total
                      </th>
                      {/* pass marks */}

                      {/* obtained marks*/}
                      <th
                        scope="col"
                        className="px-3 py-3.5 border-l text-left text-sm font-medium text-primary-grey-700 min-w-[72px]  "
                      >
                        Theory
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                      >
                        Pratical
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                      >
                        Assest
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                      >
                        Total
                      </th>
                      <th
                        scope="col"
                        className="px-3 w-10 py-3.5 text-left text-sm font-medium text-primary-grey-700 min-w-[72px]   "
                      >
                        Higest Score
                      </th>
                      {/* result empty col */}
                      <th
                        scope="col"
                        className="px-3 border-l py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        Result
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <RenderTable data={data} total={total} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full my-6 flex justify-between">
          <div className="grid grid-cols-2 w-fit gap-2">
            <div className="text-primary-grey-600 text-base font-semibold">
              Result
            </div>
            <div className="font-semibold text-primary-grey-700">
              : Distinction
            </div>
            <div className="text-primary-grey-600 text-base font-semibold">
              Percentage
            </div>
            <div className="font-semibold text-primary-grey-700">: 80%</div>
            <div className="text-primary-grey-600 text-base font-semibold">
              Performance
            </div>
            <div className="font-semibold text-primary-grey-700">
              : Outstanding
            </div>
          </div>
          <div className="text-sm text-primary-grey-600 ">
            *Note:A=Absent, F=Fail
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
