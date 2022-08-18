import RenderTable from "./RenderTable";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
const people = [
  {
    date: 557663,
    particular: "Fee",
    amount: 12000000,
  },
  {
    date: "-----",
    particular: "Miscellaneous fee",
    amount: 12000000,
  },
  {
    date: "--",
    particular: "Previous Fee",
    amount: 12000000,
  },
];

export default function Table() {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);
  return (
    <>
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
                <Dialog.Panel className="sm:my-8 sm:max-w-xl sm:w-full relative overflow-hidden text-left transition-all transform bg-white rounded-lg shadow-xl">
                  <Dialog.Title className="p-2">Fee</Dialog.Title>
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
                        <tbody className="divide-primary-50 divide-y-[1px]">
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
                      className="px-3 py-3.5  w-12 text-left text-sm font-medium text-primary-grey-700    "
                    >
                      Date
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
                      Amount
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
