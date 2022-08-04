import React, { useState } from "react";

export default function RenderTable({ curr }) {
  const [status, setStatus] = useState(true);
  return (
    <tr>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {curr.id}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {curr.name}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {curr.department}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {curr.designation}
      </td>
      <td className="whitespace-nowrap px-3 py-4 pt-6 text-sm flex items-center justify-center text-gray-500">
        {/*  checked:bg-primary-grey-700 hover:checked:bg-primary-grey-700 focus:ring-0 focus:ring-offset-0  */}
        <input
          type="checkbox"
          checked={status}
          className=" ring-0 w-6 h-6 rounded-full"
          onChange={() => {
            setStatus(!status);
          }}
        />
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {status ? (
          <input
            type="text"
            className=" border-primary-grey-400 bg-primary-grey-100 placeholder:text-primary-grey-400 text-primary-grey-700 text-sm rounded shadow-md"
            disabled
          />
        ) : (
          <input
            type="text"
            placeholder="Reason"
            className=" focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-grey-700 text-sm rounded shadow-md cursor-pointer"
          />
        )}
      </td>
    </tr>
  );
}
