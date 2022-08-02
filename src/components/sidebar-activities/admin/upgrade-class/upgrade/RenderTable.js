import { Link } from "react-router-dom";
import React from "react";

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((person, index) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.class}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.level}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.faculty}
          </td>

          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.section}
          </td>

          <td className="text-primary-btn whitespace-nowrap px-3 py-4 text-sm font-medium">
            <Link
              to={`class/${person.class.replace(" ", "-")}-${person.section}`}
            >
              Upgrade
            </Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
