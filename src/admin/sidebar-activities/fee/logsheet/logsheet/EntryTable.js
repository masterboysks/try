import React, { useEffect, useState } from "react";
import RenderTable from "./EntryTableRender";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

export default function Table({ type }) {
  const [entry, setEntry] = useState([1]);
  useEffect(() => {
    type.entry === "discount" && setEntry([1]);
  }, [type]);

  return (
    <div className={`${type ? "" : " pointer-events-none opacity-50   "}`}>
      <div
        className={` ring-1 ring-black ring-opacity-5 mb-3 mt-6 min-w-full overflow-x-auto rounded-lg shadow `}
      >
        <div className=" flex flex-col w-full rounded">
          <div className=" overflow-x-auto">
            <table className=" min-w-full divide-y divide-gray-300 table-fixed">
              <thead className="bg-gray-50">
                <tr className="text-primary-grey-700">
                  <th
                    scope="col"
                    className=" py-3.5 px-3 text-left text-sm font-semibold text-primary-active"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Amount (Rs.)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Discount (Rs.)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Total amount (Rs.)
                  </th>
                  <th className=""></th>
                </tr>
              </thead>
              <tbody className=" bg-white divide-y divide-gray-200">
                {entry.map((curr, index) => {
                  return (
                    <RenderTable
                      type={type}
                      index={index}
                      setEntry={setEntry}
                      entry={entry}
                    ></RenderTable>
                  );
                })}
                <tr className="bg-gray-50 ">
                  <td colSpan="6">
                    <div
                      className={`w-fit flex p-2 mx-2 ml-auto cursor-pointer ${
                        type.entry === "discount"
                          ? "pointer-events-none opacity-40 "
                          : " "
                      }`}
                    >
                      <div
                        className="w-fit flex items-center justify-center"
                        onClick={() => {
                          setEntry([...entry, 1]);
                        }}
                      >
                        <div className="text-primary-btn mx-1">Add new</div>
                        <AddIcon
                          className="text-primary-btn"
                          fontSize="small"
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="md:flex-row flex flex-col w-full">
        <div className="grid items-center grid-cols-2 py-1">
          <label htmlFor="grandTotal">Grand total :</label>
          <input
            type="number"
            name="grandTotal"
            disabled
            id="grandTotal"
            placeholder="Rs.12000"
            className="mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
          />
          <label htmlFor="paidAmount">Paid ammount*: </label>
          <input
            type="number"
            name="paidAmmount"
            id="paidAmmount"
            placeholder="Rs.12000"
            className="mt-[6px] w-36 p- rounded  focus:ring-primary-btn   shadow-md border-primary-field  placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
          />
          <label htmlFor="due">Due amount:</label>
          <input
            type="number"
            name="due"
            disabled
            id="due"
            placeholder="Rs.12000"
            className="mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
          />
        </div>
        <div className=" md:ml-3 md:my-0 md:mt-auto flex justify-between flex-1 my-3">
          <div className="generate md:items-center flex">
            <input type="checkbox" className="mr-3 rounded" id="generateBill" />
            <label htmlFor="generateBill" className="">
              Generate Bill
            </label>
          </div>
          <div className="btns w-fit ">
            <Link
              to="/fee/student-logsheet "
              className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
            >
              Cancel
            </Link>
            <div className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm">
              Submit
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
