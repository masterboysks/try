import { useState } from "react";

export default function FeeForm() {
  const [transportation, setTransportation] = useState(false);
  const [totalFee, setTotalFee] = useState(18000);

  return (
    <>
      <div className=" ring-1 ring-black ring-opacity-5 my-9 min-w-full overflow-x-auto rounded-lg shadow">
        <div className=" flex flex-col w-full rounded">
          <div className=" overflow-x-auto">
            <table className=" min-w-full divide-y divide-gray-300 table-fixed">
              <thead className="bg-gray-50">
                <tr className="text-primary-grey-700">
                  <th
                    scope="col"
                    className=" py-3.5 px-3 text-left text-sm font-semibold text-primary-active"
                  >
                    Fee name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Amount (Rs)
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Discount amount
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                  >
                    Total amount (Rs)
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
                      placeholder="5000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      type="Number"
                      placeholder="1000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      disabled
                      type="number"
                      placeholder="4000"
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
                      placeholder="10000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      type="Number"
                      placeholder="1000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      disabled
                      type="number"
                      placeholder="9000"
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
                      placeholder="2000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      type="Number"
                      placeholder="0"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      disabled
                      type="number"
                      placeholder="2000"
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
                      placeholder="1000"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      type="Number"
                      placeholder="0"
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      disabled
                      type="number"
                      placeholder="1000"
                    />
                  </td>
                </tr>
                {/* transportation */}

                <tr>
                  <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      type="checkbox"
                      className=" mx-2 rounded"
                      id="transportation_fee"
                      value={transportation}
                      onChange={() => {
                        setTransportation(!transportation);
                      }}
                    />
                    <label htmlFor="transportation_fee">
                      Transportation fee
                    </label>
                    <br />
                    {transportation && (
                      <div className="flex flex-col ml-8">
                        <select
                          name="vehicle_route"
                          id="vehicle_route"
                          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                        >
                          <option value="test">Select</option>
                        </select>
                        <select
                          name="vehicle_route"
                          id="vehicle_route"
                          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                        >
                          <option value="test">Select</option>
                        </select>
                        <select
                          name="vehicle_route"
                          id="vehicle_route"
                          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                        >
                          <option value="test">Select</option>
                        </select>
                      </div>
                    )}
                  </td>
                  <td className="whitespace-nowrap relative h-[75px] py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      className=" p- rounded  focus:ring-primary-btn   absolute top-[22px] xl:w-[96%] w-[90%] sm:w-[92%] md:w-[94%] border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      disabled
                      type="number"
                      placeholder="8000"
                    />
                  </td>
                  <td className="whitespace-nowrap relative h-[75px] py-4 pr-3 text-sm text-left text-gray-500 ">
                    <input
                      type="Number"
                      placeholder="1000"
                      className="  p- rounded  focus:ring-primary-btn    absolute top-[22px] xl:w-[96%] w-[90%] sm:w-[92%] md:w-[94%]  border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                    />
                  </td>
                  <td className="whitespace-nowrap relative h-[75px] py-4 pr-3 text-sm text-left text-gray-500">
                    <input
                      className=" p- rounded  focus:ring-primary-btn    absolute top-[22px] xl:w-[96%] w-[90%] sm:w-[92%] md:w-[94%]  border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      disabled
                      type="number"
                      placeholder="7000"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className=" w-full my-6">
        <div className="w-fit flex items-center ml-auto">
          <div className="">Grand total :</div>
          <div className=" border-primary-grey-400 bg-primary-grey-100 text-primary-grey-700 py-2 px-3 pr-5 ml-2 text-sm border-[1px] rounded shadow-md">
            Rs. {totalFee}
          </div>
        </div>
      </div>
    </>
  );
}
