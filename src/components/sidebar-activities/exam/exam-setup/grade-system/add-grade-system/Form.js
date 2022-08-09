import React, { useState } from "react";
import { Link } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import AddIcon from "@mui/icons-material/Add";
import RenderTable from "./RenderTable";
export default function Form() {
  const [entry, setEntry] = useState([1]);
  return (
    <>
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Level*
            </label>

            <select className="w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm">
              <option value="Test">Select</option>
            </select>
          </div>
        </div>
      </form>
      <div className="mt-11 lg:w-2/3 w-full">
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
                      Lower Limit*
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      Upper Limit*
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      Grade*
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      GPA*
                    </th>

                    <th className=""></th>
                  </tr>
                </thead>
                <tbody className=" bg-white divide-y divide-gray-200">
                  {entry.map((curr, index) => {
                    return (
                      <RenderTable
                        index={index}
                        entry={entry}
                        setEntry={setEntry}
                      ></RenderTable>
                    );
                  })}
                  <tr className="bg-gray-50 ">
                    <td colSpan="5">
                      <div
                        className={`w-fit flex p-2 mx-2 ml-auto cursor-pointer
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
      </div>
    </>
  );
}
