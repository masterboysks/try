import React from "react";
import { Link } from "react-router-dom";
import Break from "../../break";

export default function Form() {
  return (
    <>
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Level*
            </label>
            <br />
            <select className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
              <option value="test">Select</option>
            </select>
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Class/Semester*
            </label>
            <br />
            <select className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
              <option value="test">Select</option>
            </select>
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Faculty
            </label>
            <br />
            <select className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
              <option value="test">Select</option>
            </select>
          </div>
          <div>
            <label className="my-6 text-sm" htmlFor="Student Id">
              Sub-faculty
            </label>
            <br />
            <select className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
              <option value="test">Select</option>
            </select>
          </div>
        </div>
      </form>
      <Break title="Fee rate info" />
      <div className="mt-11 lg:w-2/3 w-full">
        <div className="my-6">
          <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
            <div className="inline-block w-full align-middle">
              <div className=" w-full rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 table-fixed">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                      >
                        Fee name
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 w-56 text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Ammount
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" bg-white divide-y divide-gray-200">
                    {/* addmission */}
                    <tr>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                        <input
                          type="checkbox"
                          className=" mx-2 rounded"
                          id="admission_fee"
                        />
                        <label htmlFor="admission_fee">Admission fee</label>
                      </td>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                        <input
                          type="Number"
                          placeholder=""
                          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                        />
                      </td>
                    </tr>
                    {/* Annual */}
                    <tr>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                        <input
                          type="checkbox"
                          className=" mx-2 rounded"
                          id="annual_fee"
                        />
                        <label htmlFor="annual_fee">Annual fee</label>
                      </td>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                        <input
                          type="Number"
                          placeholder=""
                          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                        />
                      </td>
                    </tr>
                    {/* monthly */}
                    <tr>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                        <input
                          type="checkbox"
                          className=" mx-2 rounded"
                          id="monthly_fee"
                        />
                        <label htmlFor="monthly_fee">Monthly fee</label>
                      </td>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                        <input
                          type="Number"
                          placeholder=""
                          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                        />
                      </td>
                    </tr>
                    {/* lab */}
                    <tr>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                        <input
                          type="checkbox"
                          className=" mx-2 rounded"
                          id="lab_fee"
                        />
                        <label htmlFor="lab_fee">Lab fee</label>
                      </td>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                        <input
                          type="Number"
                          placeholder=""
                          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                        />
                      </td>
                    </tr>
                    {/* pratical */}
                    <tr>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                        <input
                          type="checkbox"
                          className=" mx-2 rounded"
                          id="lab_fee"
                        />
                        <label htmlFor="lab_fee">Pratical fee</label>
                      </td>
                      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                        <input
                          type="Number"
                          placeholder=""
                          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-full">
        <div className=" w-fit ml-auto">
          <Link
            to="/fee/fee-assign"
            className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
          >
            Cancel
          </Link>
          <Link
            to="/fee/fee-assign"
            className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
          >
            Save
          </Link>
        </div>
      </div>
    </>
  );
}
