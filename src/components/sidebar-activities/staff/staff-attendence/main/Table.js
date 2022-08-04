import React from "react";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";

const people = [
  {
    id: 115,
    name: "Ranjit",
    department: "Academic",
    designation: "Primary teacher",
  },
  {
    id: 116,
    name: "Ranjit",
    department: "Academic",
    designation: "Primary teacher",
  },
  {
    id: 1155,
    name: "Ranjit",
    department: "Academic",
    designation: "Primary teacher",
  },
  {
    id: 11532,
    name: "Ranjit",
    department: "Academic",
    designation: "Primary teacher",
  },
  {
    id: 1152,
    name: "Ranjit",
    department: "Academic",
    designation: "Primary teacher",
  },
];

export default function Table() {
  return (
    <div className="w-full my-6">
      <div className="my-6">
        <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Staff Id
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Staff name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Department
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Designation
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10 text-left  text-sm font-medium text-primary-grey-700  "
                    >
                      Status
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Reason
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {people.map((curr) => {
                    return (
                      <React.Fragment key={curr.id}>
                        <RenderTable curr={curr} />
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-fit ml-auto">
        <Link
          to="/staff/staff-attendence"
          className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
        >
          Cancel
        </Link>
        <Link
          to="/staff/staff-attendence"
          className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
        >
          Save
        </Link>
      </div>
    </div>
  );
}
