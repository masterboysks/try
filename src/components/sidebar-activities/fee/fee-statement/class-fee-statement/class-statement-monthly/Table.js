import { GlobeAltIcon, PrinterIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import { useLayoutEffect, useRef, useState } from "react";
import RenderTable from "./RenderTable";
import Search from "@mui/icons-material/SearchOutlined";

const people = [
  {
    monthlyFee: 10000000,
    name: "Asmita",
    previousDue: 40,
    invoiceStatus: "Unplublished",

    total: 990000,
    miscellaneousFee: 15000,
  },
  {
    monthlyFee: 500,
    name: "Aarya joti Bajaraya",
    previousDue: 40,
    invoiceStatus: "Unplublished",

    total: 990000,
    miscellaneousFee: 15000,
  },
];
export default function Table() {
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
  return (
    <>
      <div className="md:flex-row flex flex-col justify-between my-6">
        <div className="sm:grid-cols-2 grid grid-cols-1 gap-4">
          <div>
            <label className="py-6 text-sm" htmlFor="Student Id">
              Month
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
      </div>
      <div className="flex items-center justify-between">
        <div className="md:block hidden text-xl">Magh fee statement</div>
        <div className=" flex items-center gap-3">
          <div className="flex items-center">
            <div className="text-primary-btn  font-semibold">Publish</div>
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
      <div className=" ring-1 ring-black ring-opacity-5 mb-9 min-w-full mt-4 overflow-x-auto rounded-lg shadow">
        <div className="w-fit ml-auto"></div>
        <div className=" flex flex-col w-full rounded">
          <div className=" overflow-x-auto">
            <table className=" min-w-full divide-y divide-gray-300 table-fixed">
              <thead className="bg-gray-50">
                <tr className="text-primary-grey-700">
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
                    Student name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Magh fee
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Miscellaneous fee
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Previous due
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Total
                  </th>
                  <th
                    scope="col"
                    className="relative py-3.5 pl-3 pr-4 sm:pr-6 text-left "
                  >
                    Invoice status
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white divide-y divide-gray-200">
                {people.map((person, index) => (
                  <RenderTable
                    key={index}
                    person={person}
                    selectedPeople={selectedPeople}
                    setSelectedPeople={setSelectedPeople}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
