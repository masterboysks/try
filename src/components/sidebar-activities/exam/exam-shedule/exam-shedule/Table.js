import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
import Search from "@mui/icons-material/SearchOutlined";
const people = [
  {
    examName: "First term  examination",
  },
  {
    examName: "Bsc.CSIT Preboard examination",
  },
];
export default function Table() {
  return (
    <>
      {" "}
      <div className="md:flex-row flex flex-col justify-between my-6">
        <div className="sm:grid-cols-2 grid grid-cols-1 gap-4">
          <div>
            <label className="py-6 text-sm" htmlFor="Student Id">
              Level*
            </label>
            <br />
            <select className="mt-[6px] w-40 min-w-full p- rounded  focus:ring-primary-btn    border-primary-field bg-white shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
              <option value="test">Select</option>
            </select>
          </div>
          <div className="h-fit mt-auto -mb-1">
            <div className="h-fit w-fit bg-primary-btn sm:box-content col-span-full sm:ml-0 sm:py-2 box-border px-4 py-3 mt-auto mb-1 ml-auto text-white rounded cursor-pointer">
              {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
              <Search className="w-4 mx-auto"></Search>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="mt-11 lg:w-2/3 w-full">
        <div className="sm:flex sm:items-center justify-between">
          <div className="w-72  relative max-w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="text-primary-grey-600 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-primary-grey-400 text-primary-grey-600 text-sm rounded-lg focus:ring-primary-btn block w-full pl-10 p-2.5 "
              placeholder="Search"
              required
            />
          </div>
        </div>
        <div className="my-6">
          <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
            <div className="inline-block w-full align-middle">
              <div className=" w-full rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 table-fixed">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                      >
                        Exam name
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 w-10 text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <RenderTable currentItems={people} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
