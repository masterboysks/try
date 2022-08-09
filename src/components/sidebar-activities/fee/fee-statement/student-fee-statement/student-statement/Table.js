import { PrinterIcon } from "@heroicons/react/solid";
import RenderTable from "./RenderTable";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
const people = [
  {
    date: 557663,
    particular: "Magh",
    paymentType: "cash",
    billNo: 99999,
    dr: 11,
    cr: 99999999999999999999,
    balance: 12000000,
  },
  {
    date: "-----",
    particular: "Magh",
    paymentType: "cash",
    billNo: 99999,
    dr: 11,
    cr: 99999999999999999999,
    balance: 12000000,
  },
  {
    date: "--",
    particular: "Magh",
    paymentType: "cash",
    billNo: 99999,
    dr: 11,
    cr: 99999999999999999999,
    balance: 12000000,
  },
];

export default function Table() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  return (
    <>
      <div className="md:flex-row flex flex-col justify-between">
        <div className="sm:grid-cols-2 grid grid-cols-1 gap-4">
          {" "}
          <div>
            <label className="py-6 text-sm" htmlFor="Student Id">
              From date(month)
            </label>
            <br />
            <select className="mt-[6px] w-40 min-w-full p- rounded  focus:ring-primary-btn    border-primary-field bg-white shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
              <option value="test">Select</option>
            </select>
          </div>{" "}
          <div>
            <label className="py-6 text-sm" htmlFor="Student Id">
              To date(month)
            </label>
            <br />
            <select className="mt-[6px] w-40 min-w-full p- rounded  focus:ring-primary-btn    border-primary-field bg-white shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
              <option value="test">Select</option>
            </select>
          </div>
        </div>
        <div className="h-fit md:mt-auto md:my-0 flex items-center my-6">
          <div className="text-primary-btn font-semibold">Print</div>
          <div className=" text-primary-btn w-5 ml-1">
            <PrinterIcon />
          </div>
        </div>
      </div>{" "}
      <>
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
                  <Dialog.Panel className="sm:my-8 sm:max-w-xl relative w-full overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl">
                    <Dialog.Title className="p-2 text-center">
                      Magh fee
                    </Dialog.Title>
                    <Dialog.Description>
                      <div className="ring-1 ring-black ring-opacity-5 w-full overflow-x-auto shadow">
                        <table className="min-w-full divide-y divide-gray-300 table-auto">
                          <thead className="bg-gray-50 ">
                            <tr>
                              <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                                Fee name
                              </th>
                              <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                                Amount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Monthly fee
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Rs.2000
                              </td>
                            </tr>
                            <tr>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Transportation fee
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Rs.1600
                              </td>
                            </tr>
                            <tr>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Libary fee
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Rs.400
                              </td>
                            </tr>
                            <tr>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Lab fee
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Rs.1000
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <Dialog.Title className="p-2 text-center">
                        Miscellaneous fee
                      </Dialog.Title>{" "}
                      <div className="ring-1 ring-black ring-opacity-5 w-full overflow-x-auto shadow">
                        <table className="min-w-full divide-y divide-gray-300 table-auto">
                          <thead className="bg-gray-50 ">
                            <tr>
                              <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                                Date
                              </th>
                              <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                                Description
                              </th>
                              <th className="px-3 py-3.5 text-primary-grey-700 font-medium text-sm">
                                Ammount
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                2022/5/12
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                1 * School belt
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Rs.100B
                              </td>
                            </tr>
                            <tr>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                2022/5/22
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                2 * Copy
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Rs.999999999
                              </td>
                            </tr>
                            <tr>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                2022/5/12
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                3 * Tie
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Rs.99^99^99
                              </td>
                            </tr>
                            <tr>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                2022/5/12
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <ul>
                                  <li>4 * copies</li>
                                  <li>1 * books</li>
                                </ul>
                              </td>
                              <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                Rs.99^99^99^88
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
        <div className="my-6">
          <div className=" ring-1 ring-black ring-opacity-5 overflow-x-auto rounded-lg shadow">
            <div className="inline-block w-full align-middle">
              <div className=" w-full rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3.5 w-12 text-left text-sm font-medium text-primary-grey-700    "
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 w-20 text-left text-sm font-medium text-primary-grey-700    "
                      >
                        Bill.no
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 w-40  text-left text-sm font-medium text-primary-grey-700    "
                      >
                        Payment type
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Particular
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Dr.
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Cr
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Balance
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 w-10  text-left text-sm font-medium text-primary-grey-700  "
                      >
                        Inclusion
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <RenderTable currentItems={people} setOpen={setOpen} />
                    <tr className="bg-gray-100">
                      <td
                        colSpan="4"
                        className="whitespace-nowrap px-3 py-4 pr-4 text-base font-medium text-right text-gray-600"
                      >
                        Total
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600">
                        Rs.12
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600">
                        Rs.9999999999999
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600"></td>
                      <td className="whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}
