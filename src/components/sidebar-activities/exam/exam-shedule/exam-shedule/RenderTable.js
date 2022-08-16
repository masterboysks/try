import React from "react";
import ThreeDots from "@mui/icons-material/MoreVert";
import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.examName}
          </td>

          <td className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm">
            <Link to={`shedule/${person.examName}`}>Schedule</Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
