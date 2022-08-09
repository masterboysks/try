import React from "react";
import { Link } from "react-router-dom";
import RenderTable from "./RenderTable";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
const people = [
  {
    level: "School level",
  },
  {
    level: "School level",
  },
];

const view = {
  level: "School level",
  table: [
    {
      lowerLimit: 90,
      upperLimit: 100,
      grade: "A+",
      gpa: 4.0,
    },
    {
      lowerLimit: 80,
      upperLimit: 90,
      grade: "A",
      gpa: 3.6,
    },
    {
      lowerLimit: 90,
      upperLimit: 100,
      grade: "A+",
      gpa: 4.0,
    },
    {
      lowerLimit: 90,
      upperLimit: 100,
      grade: "A+",
      gpa: 4.0,
    },
    {
      lowerLimit: 90,
      upperLimit: 100,
      grade: "A+",
      gpa: 4.0,
    },
  ],
};
export default function Table() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[99]"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="sm:items-center sm:p-0 flex items-end justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="sm:my-8 sm:max-w-xl relative w-full overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl">
                  <Dialog.Title className="p-2 text-center">
                    Grade system - {view.level}
                  </Dialog.Title>
                  <Dialog.Description>
                    <div className="ring-1 ring-black ring-opacity-5 w-full shadow">
                      <table className="min-w-full divide-y divide-gray-300 table-auto">
                        <thead className="bg-gray-50 ">
                          <tr>
                            <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                              Marks
                            </th>
                            <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                              Grade
                            </th>
                            <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                              GPA
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {view.table.map((curr, i) => (
                            <tr key={i}>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {curr.lowerLimit}-{curr.upperLimit}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {curr.grade}
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                {curr.gpa}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </Dialog.Description>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="mt-11 lg:w-2/3 w-full">
        <div className="sm:flex sm:items-center justify-between">
          <div className="w-72 relative max-w-full">
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
          <div className="sm:mt-0 sm:ml-16 sm:flex-none mt-4">
            <Link
              to="add"
              className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
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
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Level
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700    "
                      >
                        Grading system
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
                    <RenderTable currentItems={people} setOpen={setOpen} />
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
