import { GlobeAltIcon, PrinterIcon } from "@heroicons/react/solid";
import Search from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
const data = [
  {
    subject: "Physics",
    fullTheory: 100,
    fullPartical: 0,
    fullAssest: 0,
    fullTotal: 100,
    passTheory: 32,
    passPratical: 0,
    passAssest: 0,
    passTotal: 32,
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
    passTheory: 32,
    passPratical: 0,
    passAssest: 0,
    passTotal: 32,
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
    passTheory: 32,
    passPratical: 0,
    passAssest: 0,
    passTotal: 32,
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
    passTheory: 32,
    passPratical: 0,
    passAssest: 0,
    passTotal: 32,
    obtainedTheory: 32,
    obtainedPratical: 0,
    obtainedAssest: 0,
    obtainedTotal: 32,
    obtainedHigest: 99,
    result: "pass",
  },
];
const Table = () => {
  return (
    <>
      {/* search */}
      <div className="w-full lg:w-11/12 mb-14">
        <div className="p-4 my-6 rounded-md shadow xl:flex ring-black ring-opacity-5 ring-1 form-solid">
          <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
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
                <option value="grade" selected>
                  Grade
                </option>
              </select>
            </div>
            <div className="box-border px-4 py-3 mt-auto ml-auto text-center text-white rounded cursor-pointer md:mx-0 md:ml-auto h-fit w-fit bg-primary-btn md:box-content xl:hidden">
              <Search className="w-4 mx-auto"></Search>
            </div>
          </div>
          <div className="box-border hidden px-2 py-2 mt-auto ml-3 text-center text-white rounded cursor-pointer w-fit h-fit bg-primary-btn xl:block">
            <Search className="w-4 mx-auto"></Search>
          </div>
        </div>
      </div>
      {/* Table heading */}
      <div className="flex items-center justify-between">
        <div className="md:block hidden text-xl">First Term Examination</div>
        <div className="flex items-center gap-3">
          <div className="text-primary-btn">Print</div>
          <div className="icon text-primary-btn w-8">
            <PrinterIcon fontSize="medium" />
          </div>
        </div>
      </div>
      {/* table */}
      <div className="mt-11">
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
                        colSpan="4"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        Pass marks
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
                    <RenderTable data={data} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full my-6">
          <div className=" w-fit ml-auto">
            <Link
              to="/exam/exam-setup/assign-exam"
              className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
            >
              Cancel
            </Link>
            <Link
              to="/exam/exam-setup/assign-exam"
              className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
            >
              Save
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
