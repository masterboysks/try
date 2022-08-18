import { GlobeAltIcon, PrinterIcon } from "@heroicons/react/solid";
import Search from "@mui/icons-material/SearchOutlined";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  InputDisabled,
  Radio,
  SearchBar,
  Select,
} from "../../../../components/fields";
import RenderTable from "./RenderTable";
const people = [
  {
    class: "Physics",
    section: 100,
    faculty: 0,
    status: "Assigned",
    stdId: 556453127332,
    stdName: "Saurav ",
  },
  {
    class: "Physics",
    section: 100,
    faculty: 0,
    status: "Assigned",
    stdId: 5587667332,
    stdName: "Saurav ",
  },
  {
    class: "Physics",
    section: 100,
    faculty: 0,
    status: "Assigned",
    stdId: 556733256,
    stdName: "Saurav ",
  },
  {
    class: "Physics",
    section: 100,
    faculty: 0,
    status: "Assigned",
    stdId: 556733452,
    stdName: "Saurav ",
  },
];

export default function Table() {
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

  // Form and filter
  const arrayExamNameForm = ["djfh", "dsjfg", "djfkhgfd"];
  const arrayAdmitCardTypeForm = ["djfh", "dsjfg", "djfkhgfd"];
  const arrayStatusFilter = ["Status", "Assigned", "Unassigned"];
  const arrayRadioAssign = ["Assigned and Print", "Assign"];
  const [examNameForm, setExamNameForm] = useState("Select");
  const [admitCardType, setAdmitCardType] = useState("Select");
  const [searchFilter, setSearchFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("Status");
  const [radioAssign, setRadioAssign] = useState("");
  return (
    <>
      {/* search */}
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="">
            <Select
              label="Exam name*"
              value={arrayExamNameForm}
              selected={examNameForm}
              setSelected={setExamNameForm}
            />
          </div>
          <div className="">
            <Select
              label="Exam name*"
              value={arrayAdmitCardTypeForm}
              selected={admitCardType}
              setSelected={setAdmitCardType}
            />
          </div>
        </div>
      </form>
      {/* Table heading */}
      <div className="lg:flex-row flex flex-col items-center justify-between">
        <form className="form-solid lg:w-6/12 w-full my-6 rounded-md">
          <div className="sm:grid-cols-2 grid grid-cols-1 gap-4">
            <div className=" relative w-full">
              <SearchBar value={searchFilter} setValue={setSearchFilter} />
            </div>
            <div className="flex items-center">
              <Select
                value={arrayStatusFilter}
                selected={statusFilter}
                setSelected={setStatusFilter}
              />
            </div>
          </div>
        </form>
        <div className=" sm:flex-row sm:items-center flex flex-col items-end gap-3 ml-auto">
          <Radio
            value={arrayRadioAssign}
            selected={radioAssign}
            setSelected={setRadioAssign}
            name="Assign_or_and_print"
          />

          <div className="">
            <div className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm">
              Assign
            </div>
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
                      className=" py-3.5 pr-3 text-left text-sm font-medium text-primary-grey-700"
                    >
                      Std.ID
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
                      Class/Semester
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Faculty
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Section
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
        <div className="flex items-center">
          <InputDisabled value={30} />
        </div>
        {/* <div className="mt-[6px] w-full p- rounded  focus:ring-primary-btn  border   border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm p-2">
          30
        </div> */}

        <div className="text-primary-700 text-base font-semibold">
          Total Fail
        </div>
        <div className="flex items-center">
          <InputDisabled value={"0"} />
        </div>
      </div>
    </>
  );
}
