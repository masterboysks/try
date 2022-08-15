import { GlobeAltIcon, PrinterIcon } from "@heroicons/react/solid";
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  Fragment,
} from "react";
import RenderTable from "./RenderTable";

import { Dialog, Transition } from "@headlessui/react";
import { Input } from "../../../../components/fields";
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
    status: "Published",
    remark: "pass",
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
    status: "Published",
    remark: "pass",
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
    status: "Published",
    remark: "pass",
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
    status: "Published",
    remark: "pass",
    stdId: 556733452,
    stdName: "Saurav ",
  },
];
const subject = ["English", "Maths", "Nepali", "Social", "EHP", "Science"];

export default function Table() {
  // Modal
  const [open, setOpen] = useState(false);
  const [miniumDueAmmount, setMiniumDueAmmount] = useState("");
  const cancelButtonRef = useRef(null);
  const handleSubmitMiniumDueAmmount = () => {
    console.log(miniumDueAmmount);
  };
  // Checkbox
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }
  // pagination
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
      {/* Table heading */}
      <div className="flex items-center justify-between">
        <div className="md:block hidden text-xl">First Term Examination</div>
        <div className=" flex items-center gap-3">
          <div className="flex items-center" onClick={() => setOpen(true)}>
            <div className="text-primary-btn font-semibold">Publish</div>
            <div className="icon text-primary-btn w-5 ml-2">
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
                      className="sm:w-16 sm:px-8 relative w-12 px-6"
                    >
                      <input
                        type="checkbox"
                        className="left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className=" py-3.5 pr-3 text-left text-sm font-semibold text-primary-active"
                    >
                      Std.ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Student Name
                    </th>
                    {subject.map((curr, i) => (
                      <th
                        key={i}
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
                  <RenderTable
                    currentItems={currentItems}
                    subject={subject}
                    selectedPeople={selectedPeople}
                    setSelectedPeople={setSelectedPeople}
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
      <div className="w-52 grid items-center grid-cols-2 gap-3 mt-3 mb-6 ml-auto">
        <div className="text-primary-700 text-base font-semibold">
          Total Pass
        </div>
        <div className="mt-[6px] w-full p- rounded  focus:ring-primary-btn  border   border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm p-2">
          30
        </div>

        <div className="text-primary-700 text-base font-semibold">
          Total Fail
        </div>
        <div className="mt-[6px] w-full p- rounded  focus:ring-primary-btn  border   border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm p-2 ">
          0
        </div>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
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
                  className="sm:my-8 sm:max-w-xl relative w-full p-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl"
                  as="div"
                >
                  <Dialog.Title className="p-2 text-left">
                    How much minium due amount is allowed for online result?
                  </Dialog.Title>
                  <Dialog.Description as="div">
                    <div className="w-6/12">
                      <Input
                        label="Minimum due ammount:"
                        placeholder="5000"
                        type="number"
                        value={miniumDueAmmount}
                        setValue={setMiniumDueAmmount}
                      />
                    </div>
                    <div className=" w-fit my-3 ml-auto">
                      <div
                        onClick={() => setOpen(false)}
                        className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
                      >
                        Cancel
                      </div>
                      <div
                        onClick={() => {
                          setOpen(false);
                          handleSubmitMiniumDueAmmount();
                        }}
                        className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
                      >
                        Publish
                      </div>
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
