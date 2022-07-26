import React from "react";
import ThreeDots from "@mui/icons-material/MoreVert";

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((person, index) => (
        <tr key={person.stdId}>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.stdId}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.stdName}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.class}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.faculty}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.sec}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.gen}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.numb}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.status}
          </td>
          <td
            className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap "
            onMouseOver={() => {
              document.getElementById(person.stdId).classList.remove("hidden");
            }}
            onMouseLeave={() => {
              document.getElementById(person.stdId).classList.add("hidden");
            }}
          >
            <ThreeDots className="devMenuTable" />
            <table
              className="divide-y-2 absolute -ml-[64px] hidden bg-white shadow-lg w-12 rounded "
              id={person.stdId}
            >
              <tbody>
                <tr>
                  <td className="p-3">Edit</td>
                </tr>
                <tr>
                  <td className="p-3">Delete</td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
