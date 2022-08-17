import React from "react";

const RenderTable = ({ currentItems, setOpen }) => {
  return (
    <>
      {currentItems.map((person, index) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.staffId}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.staffName}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.depart}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.desig}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.presentDays}
          </td>
          <td
            className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm"
            onClick={() => setOpen(true)}
          >
            {person.absentDays}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.schoolDays}
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
