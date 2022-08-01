import React from "react";
import ThreeDots from "@mui/icons-material/MoreVert";

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((person, index) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.fiscalYear}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.isRunning ? "True" : "False"}
          </td>

          <td
            className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
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
