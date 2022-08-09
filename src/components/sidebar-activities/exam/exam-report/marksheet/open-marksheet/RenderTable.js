import React from "react";

export default function RenderTable({ data }) {
  return (
    <>
      {data.map((curr, i) => (
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
            {curr.passTheory}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {curr.passPratical}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {curr.passAssest}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {curr.passTotal}
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
      ))}
    </>
  );
}
