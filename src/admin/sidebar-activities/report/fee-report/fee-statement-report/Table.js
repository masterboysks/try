import { PrinterIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { Select } from "../../../../components/fields";
import RenderTable from "./RenderTable";
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
  const arrayFromDate = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const arrayToDate = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = new Date().getMonth();
  const [fromDate, setFromDate] = useState("Jan");
  const [toDate, setToDate] = useState(arrayToDate[month]);

  return (
    <>
      <div className="md:flex-row flex flex-col justify-between my-6">
        <div className="sm:grid-cols-2 grid grid-cols-1 gap-4">
          <div>
            <Select
              label="From date(month)"
              value={arrayFromDate}
              selected={fromDate}
              setSelected={setFromDate}
            />
          </div>
          <div>
            <Select
              label="To date(month)"
              value={arrayToDate}
              selected={toDate}
              setSelected={setToDate}
            />
          </div>
        </div>
        <div className="h-fit md:mt-auto md:my-0 text-primary-btn flex items-center my-6">
          <div className="">Print</div>
          <div className=" text-primary-btn w-6 ml-1">
            <PrinterIcon fontSize="mediun" />
          </div>
        </div>
      </div>
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
                      className="px-3 py-3.5  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Particular
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 w-40 text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Dr.
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 w-40 text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Cr.
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 w-40  text-left text-sm font-medium text-primary-grey-700  "
                    >
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <RenderTable currentItems={people} />
                  <tr className="bg-gray-100">
                    <td
                      colSpan="1"
                      className="whitespace-nowrap px-3 py-4 pr-4 text-base font-medium text-right text-gray-600"
                    >
                      Total
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600">
                      Rs.1299999999
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600">
                      Rs.9999999999999
                    </td>
                    <td className="whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600"></td>
                    <td></td>
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
