// import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";

const currentItems = [
  {
    board: "pratap",
    level: "admistrative",
    program: "manager",
    batch: "idk",
    grade: "male",
    org: "01234569978",
    orgAddress: "active",
  },
  {
    board: "pratap",
    level: "admistrative",
    program: "manager",
    batch: "idk",
    grade: "male",
    org: "01234569978",
    orgAddress: "active",
  },
  {
    board: "pratap",
    level: "admistrative",
    program: "manager",
    batch: "idk",
    grade: "male",
    org: "01234569978",
    orgAddress: "active",
  },
  {
    board: "pratap",
    level: "admistrative",
    program: "manager",
    batch: "idk",
    grade: "male",
    org: "01234569978",
    orgAddress: "active",
  },
  {
    board: "pratap",
    level: "admistrative",
    program: "manager",
    batch: "idk",
    grade: "male",
    org: "01234569978",
    orgAddress: "active",
  },
  {
    board: "pratap",
    level: "admistrative",
    program: "manager",
    batch: "idk",
    grade: "male",
    org: "01234569978",
    orgAddress: "active",
  },
  {
    board: "pratap",
    level: "admistrative",
    program: "manager",
    batch: "idk",
    grade: "male",
    org: "01234569978",
    orgAddress: "active",
  },
  {
    board: "pratap",
    level: "admistrative",
    program: "manager",
    batch: "idk",
    grade: "male",
    org: "01234569978",
    orgAddress: "active",
  },
  {
    board: "pratap",
    level: "admistrative",
    program: "manager",
    batch: "idk",
    grade: "male",
    org: "01234569978",
    orgAddress: "active",
  },
];

export default function AcademicTable() {
  // pagination
  // const itemsOnPage = 5;
  // const [currentPage, setCurrentPage] = useState(1);
  // const [currentItems, setCurrentItems] = useState(
  //   people.slice(0, itemsOnPage)
  // );
  // const [indexOfLastItem, setIndexOfLastItem] = useState(
  //   currentPage * itemsOnPage
  // );
  // const [indexOfFirstItem, setIndexOfFirstItem] = useState(
  //   indexOfLastItem - itemsOnPage
  // );
  // const [message, setmessage] = useState("Showing 1 to 2 of 2 results");

  // const onNextPage = () => {
  //   setCurrentPage((curr) => curr + 1);
  // };

  // const onPreviousPage = () => {
  //   setCurrentPage((curr) => curr - 1);
  // };
  // useEffect(() => {
  //   setIndexOfLastItem(currentPage * itemsOnPage);
  // }, [currentPage]);
  // useEffect(() => {
  //   setIndexOfFirstItem(indexOfLastItem - itemsOnPage);
  // }, [indexOfLastItem]);
  // useEffect(() => {
  //   setmessage(
  //     `Showing ${indexOfFirstItem + 1} to ${
  //       people.length <= indexOfLastItem ? people.length : indexOfLastItem
  //     } of ${people.length}`
  //   );
  //   setCurrentItems(people.slice(indexOfFirstItem, indexOfLastItem));
  // }, [indexOfFirstItem]);

  return (
    <div className="mt-11">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-primary-grey-700 text-xl font-semibold">
            Academic Details
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the users in your account including their name, title,
            email and role.
          </p>
        </div>
        <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
          <Link
            to="/staff/staff-information/add-staff/academic/add-academic-details"
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Add
          </Link>
        </div>
      </div>
      <div className="my-6">
        <div className=" ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Board/University
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Level
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Program
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Passed year
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Division/Grade
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Institution name
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Institution address line
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <RenderTable currentItems={currentItems} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
