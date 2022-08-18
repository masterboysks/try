import React from "react";

export default function RenderTable({ data, total }) {
  return (
    <>
      {data.map((curr, i) => {
        return (
          <tr key={i}>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {curr.subject}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border-l">
              {curr.fullTheory}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {curr.fullPartical}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {curr.fullAssest}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {curr.fullTotal}
            </td>

            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border-l">
              {curr.obtainedTheory}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {curr.obtainedPratical}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {curr.obtainedAssest}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {curr.obtainedTotal}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
              {curr.obtainedHigest}
            </td>
            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500 border-l">
              {curr.result}
            </td>
          </tr>
        );
      })}
      <tr className=" bg-gray-100">
        <td
          colSpan="8"
          className="whitespace-nowrap px-3 py-4 pr-4 text-base font-medium text-right text-gray-600"
        >
          Grand Total
        </td>
        <td className="whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600 border-l">
          {total}
        </td>

        <td className="whitespace-nowrap px-3 py-4 text-base font-medium tracking-wide text-gray-600"></td>
        <td></td>
      </tr>
    </>
  );
}
