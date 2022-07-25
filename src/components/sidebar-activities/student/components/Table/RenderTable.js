import React from "react";
import ThreeDots from "@mui/icons-material/MoreVert";

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
          <td
            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500  "
            onMouseOver={() => {
              document.getElementById(person.stdId).classList.remove("hidden");
            }}
            onMouseLeave={() => {
              document.getElementById(person.stdId).classList.add("hidden");
            }}
          >
            <ThreeDots className="devMenuTable" />
          </td>
          <table
            className="divide-y-2 absolute -ml-[112px] hidden bg-white shadow-lg w-12 rounded "
            id={person.stdId}
          >
            <tr>
              <td className="p-3">Edit</td>
            </tr>
            <tr>
              <td className="p-3">Delete</td>
            </tr>
          </table>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
