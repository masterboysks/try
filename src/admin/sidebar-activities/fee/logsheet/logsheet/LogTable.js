import RenderTable from "./LogTableRender";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
const people = [
  {
    date: 557663,
    billNo: 156332,
    total: 99999999999,
    paid: 0,
    due: 50000000000000,
  },
  {
    date: 557663,
    billNo: 156342,
    total: -1,
    paid: 0,
    due: -1,
  },
];

export default function LogTable() {
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  return (
    <>
      <div className="my-9">
        <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-3 py-3.5  w-16 text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Date
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Bill no.
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Total amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Paid amount
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Due amount
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  "
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
                <Dialog.Panel className="sm:my-8 sm:max-w-xl sm:w-full sm:p-6 relative px-4 pt-5 pb-4 overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl">
                  <div
                    className={` ring-1 ring-black ring-opacity-5 my-9 min-w-full overflow-x-auto rounded-lg shadow `}
                  >
                    <div className=" flex flex-col w-full rounded">
                      <div className=" overflow-x-auto">
                        <table className=" min-w-full divide-y divide-gray-300 table-fixed">
                          <thead className="bg-gray-50">
                            <tr className="text-primary-grey-700">
                              <th
                                scope="col"
                                className=" py-3.5 px-3  text-left text-sm font-semibold text-primary-active"
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
                            </tr>
                          </thead>
                          <tbody className=" bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="p-2">
                                <input
                                  type="date"
                                  name="date"
                                  id="date"
                                  disabled
                                  className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  type="text"
                                  className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  type="number"
                                  name="ammount"
                                  id="ammount"
                                  placeholder="12000"
                                  className="mt-[6px] w-full p- rounded  focus:ring-primary-btn   shadow-md border-primary-field  placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  type="number"
                                  name="discount"
                                  id="discount"
                                  placeholder="00"
                                  className={`mt-[6px] w-full p- rounded  focus:ring-primary-btn 
                                    
                                      border-primary-field  placeholder:text-primary-grey-400 
                                  } `}
                                />
                              </td>
                              <td className="overscroll-none relative p-2">
                                <input
                                  type="number"
                                  name="total"
                                  disabled
                                  id="total"
                                  placeholder="12000"
                                  className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                                />
                                <div className="top-5 -right-3 absolute z-10 w-5"></div>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-2">
                                <input
                                  type="date"
                                  name="date"
                                  id="date"
                                  disabled
                                  className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  type="text"
                                  className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  type="number"
                                  name="ammount"
                                  id="ammount"
                                  placeholder="12000"
                                  className="mt-[6px] w-full p- rounded  focus:ring-primary-btn   shadow-md border-primary-field  placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                                />
                              </td>
                              <td className="p-2">
                                <input
                                  type="number"
                                  name="discount"
                                  id="discount"
                                  placeholder="00"
                                  className={`mt-[6px] w-full p- rounded  focus:ring-primary-btn 
                                    
                                      border-primary-field  placeholder:text-primary-grey-400 
                                  } `}
                                />
                              </td>
                              <td className="overscroll-none relative p-2">
                                <input
                                  type="number"
                                  name="total"
                                  disabled
                                  id="total"
                                  placeholder="12000"
                                  className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                                />
                                <div className="top-5 -right-3 absolute z-10 w-5"></div>
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
                        className="ml-auto mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      />
                      <label htmlFor="paidAmount">Paid ammount*: </label>
                      <input
                        type="number"
                        name="paidAmmount"
                        id="paidAmmount"
                        placeholder="Rs.12000"
                        disabled
                        className="ml-auto mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      />
                      <label htmlFor="due">Due amount:</label>
                      <input
                        type="number"
                        name="due"
                        disabled
                        id="due"
                        placeholder="Rs.12000"
                        className="ml-auto mt-[6px] w-36 p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
                      />
                    </div>
                    <div className=" md:my-0 md:mt-auto flex flex-1 my-3">
                      <div className="btns w-fit md:ml-auto ml-0">
                        <div
                          to="/fee/student-logsheet "
                          className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </div>
                        <div
                          className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
                          onClick={() => setOpen(false)}
                        >
                          Save
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
