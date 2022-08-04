import React from "react";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
const people = [
  {
    id: "11",
    name: "14",
    department: "Anil",
    designation: "English",
    assignedSubject: "English",
  },
  {
    id: "14",
    name: "20",
    department: "Dheren",
    designation: "Spanish",
    assignedSubject: "Spanish",
  },
  {
    id: "5",
    name: "11",
    department: "Alisha",
    designation: "Maths",
    assignedSubject: "Maths",
  },
  ,
];
export default function Table() {
  return (
    <>
      <div className="lg:flex my-12">
        <div className="ring-black ring-opacity-5 ring-1 form-solid lg:w-4/6 p-4 rounded-md shadow">
          <div className="md:grid-cols-2 gap-x-5 gap-y-2 grid grid-cols-1">
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
            <div className=" flex justify-between py-2">
              <span className="text-primary-grey-600">Faculty:</span>
              <span className="text-primary-grey-700"></span>
            </div>
          </div>
        </div>
        <div className="w-fit mt-auto ml-auto">
          <Link
            to="/staff/teacher-assign/assign-teacher"
            className="bg-primary-btn hover: lg:mt-0 h-fit w-fit focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mt-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Add
          </Link>
        </div>
      </div>
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
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Assigned subject
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  "
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
    </>
  );
}
