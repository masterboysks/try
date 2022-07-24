import React from "react";

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((person, index) => (
        <tr key={person.stdId}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500    ">
            {person.stdId}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.stdName}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.class}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.faculty}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.sec}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.gen}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.numb}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500   ">
            {person.status}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  ">
            Edit
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
