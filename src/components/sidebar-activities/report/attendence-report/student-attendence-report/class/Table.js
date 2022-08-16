import React, { useEffect, useState, Fragment, useRef } from "react";
import RenderTable from "./RenderTable";
import { Dialog, Transition } from "@headlessui/react";

const people = [
  {
    studentId: 12323,
    studentName: "pratap",
    rollNo: "admistrative",
    presentDays: "idk",
    absentDays: "male",
    schoolDays: "01234569978",
  },
  {
    studentId: 14152323,
    studentName: "pratap",
    rollNo: "admistrative",
    presentDays: "idk",
    absentDays: "male",
    schoolDays: "01234569978",
  },
  {
    studentId: 1234564523,
    studentName: "pratap",
    rollNo: "admistrative",
    presentDays: "idk",
    absentDays: "male",
    schoolDays: "01234569978",
  },
  {
    studentId: 12879323,
    studentName: "pratap",
    rollNo: "admistrative",
    presentDays: "idk",
    absentDays: "male",
    schoolDays: "01234569978",
  },
  {
    studentId: 12378669784523,
    studentName: "pratap",
    rollNo: "admistrative",
    presentDays: "idk",
    absentDays: "male",
    schoolDays: "01234569978",
  },
  {
    studentId: 12378694784523,
    studentName: "pratap",
    rollNo: "admistrative",
    presentDays: "idk",
    absentDays: "male",
    schoolDays: "01234569978",
  },
  {
    studentId: 1,
    studentName: "pratap",
    rollNo: "admistrative",
    presentDays: "idk",
    absentDays: "male",
    schoolDays: "01234569978",
  },
  {
    studentId: 12378699784523,
    studentName: "pratap",
    rollNo: "admistrative",
    presentDays: "idk",
    absentDays: "male",
    schoolDays: "01234569978",
  },
  {
    studentId: 12378697784523,
    studentName: "pratap",
    rollNo: "admistrative",
    presentDays: "idk",
    absentDays: "male",
    schoolDays: "01234569978",
  },
  {
    studentId: 12378697584523,
    studentName: "pratap",
    rollNo: "admistrative",
    presentDays: "idk",
    absentDays: "male",
    schoolDays: "01234569978",
  },
];

export default function Table() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
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
      <div className="mt-11">
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
                        Student ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        Student Name
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        Roll no.
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        Total present days
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        Total absent days
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        Total school days
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <RenderTable
                      currentItems={currentItems}
                      setOpen={setOpen}
                    />
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
      </div>
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
                <Dialog.Panel
                  className="sm:my-8 sm:max-w-xl relative w-full overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl"
                  as="div"
                >
                  <Dialog.Title className="p-2 text-center">
                    Shuvam dahal-5678
                  </Dialog.Title>
                  <Dialog.Description as="div">
                    <div className="ring-1 ring-black ring-opacity-5 w-full overflow-x-auto shadow">
                      <table className="min-w-full divide-y divide-gray-300 table-auto">
                        <thead className="bg-gray-50 ">
                          <tr>
                            <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                              Date
                            </th>
                            <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                              Reason
                            </th>
                            <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              2022/8/10
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              Head blasted
                            </td>
                            <td className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm">
                              View
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              2022/8/11
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              Heart attack
                            </td>
                            <td className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm">
                              View
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              2022/8/13
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              Went to Sky Diving
                            </td>
                            <td className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm">
                              View
                            </td>
                          </tr>
                          <tr>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              2022/8/19
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              Leg broke
                            </td>
                            <td className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm">
                              View
                            </td>
                          </tr>
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
    </>
  );
}
