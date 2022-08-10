import { GlobeAltIcon, PrinterIcon } from "@heroicons/react/solid";
import Search from "@mui/icons-material/SearchOutlined";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
const people = [
  {
    subject: "Physics",
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: 99,
    result: "pass",
    stdId: 556453127332,
    stdName: "Saurav ",
  },
  {
    subject: "Physics",
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: 99,
    result: "pass",
    stdId: 5587667332,
    stdName: "Saurav ",
  },
  {
    subject: "Physics",
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: 99,
    result: "pass",
    stdId: 556733256,
    stdName: "Saurav ",
  },
  {
    subject: "Physics",
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: 99,
    result: "pass",
    stdId: 556733452,
    stdName: "Saurav ",
  },
];
const subject = ["English", "Math", "Nepali", "Social", "EHP", "Science"];
const total = people.reduce((prv, curr) => {
  return curr.obtainedTotal + prv;
}, 0);

export default Table = () => {
  const itemsOnPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState(
    people.slice(0, itemsOnPage)
  );
  const [indexOfLastItem, setIndexOfLastItem] = useState(
    currentPage * itemsOnPage
  );
  const [indexOfFirstItem, setIndexOfFirstItem] = useState(
    indexOfLastItem - itemsOnPage
  );
  const [message, setmessage] = useState("Showing 1 to 2 of 2 results");

  const onNextPage = () => {
    setCurrentPage((curr) => curr + 1);
  };

  const onPreviousPage = () => {
    setCurrentPage((curr) => curr - 1);
  };
  useEffect(() => {
    setIndexOfLastItem(currentPage * itemsOnPage);
  }, [currentPage]);
  useEffect(() => {
    setIndexOfFirstItem(indexOfLastItem - itemsOnPage);
  }, [indexOfLastItem]);
  useEffect(() => {
    setmessage(
      `Showing ${indexOfFirstItem + 1} to ${
        people.length <= indexOfLastItem ? people.length : indexOfLastItem
      } of ${people.length}`
    );
    setCurrentItems(people.slice(indexOfFirstItem, indexOfLastItem));
  }, [indexOfFirstItem]);

  return (
    <>
      {/* search */}
      <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Id">
            Academic Year*
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn mt-[6px]    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
            type="text"
            placeholder="Id"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Student Name">
            Exam name*
          </label>
          <br />
          <input
            className="w-full p- rounded  focus:ring-primary-btn mt-[6px]    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm"
            type="text"
            placeholder="Student Name"
          />
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Status">
            Grading system
          </label>
          {/* 
          default gpa
          
          */}
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Class / Semester">
            Result status
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="">
          <label className="my-6 text-sm" htmlFor="Faculty">
            Remark
          </label>
          <br />
          <select className="w-full p-2  cursor-pointer rounded mt-[6px]  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
            <option value="Test">Select</option>
          </select>
        </div>

        <div className="h-fit w-fit bg-primary-btn sm:box-content xl:col-span-3 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 mx-auto"></Search>
        </div>
      </form>
      {/* Table heading */}
      <div className="flex items-center justify-between">
        <div className="md:block hidden text-xl">First Term Examination</div>
        <div className=" flex items-center gap-3">
          <div className="flex items-center">
            <div className="text-primary-btn">Publish</div>
            <div className="icon text-primary-btn w-8 ml-2">
              <GlobeAltIcon fontSize="medium" />
            </div>
          </div>
          <div className="">
            <select className="mt-[6px]  sm:w-40 min-w-full p- rounded  focus:ring-primary-btn    border-primary-field bg-white shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
              <option value="test">Choose print option</option>
            </select>
          </div>
          <div className="text-primary-btn font-semibold">Print</div>
          <div className="icon text-primary-btn w-5">
            <PrinterIcon />
          </div>
        </div>
      </div>
      {/* table */}
      <div className="my-3">
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
                      Student ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Student Name
                    </th>
                    {subject.map((curr) => (
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        {curr}
                      </th>
                    ))}
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Percentage
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Remark
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <RenderTable currentItems={currentItems} subject={subject} />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <nav
        className=" flex items-center justify-between py-3 bg-white border-t border-gray-200"
        aria-label="Pagination"
      >
        <div className="sm:block hidden">
          <p className="text-sm text-gray-700">{message}</p>
        </div>
        <div className="sm:justify-end flex justify-between flex-1">
          <button
            disabled={indexOfFirstItem === 0}
            onClick={onPreviousPage}
            className="disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
          >
            Previous
          </button>
          <button
            disabled={indexOfLastItem >= people.length}
            onClick={onNextPage}
            className="disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
          >
            Next
          </button>
        </div>
      </nav>
    </>
  );
};
