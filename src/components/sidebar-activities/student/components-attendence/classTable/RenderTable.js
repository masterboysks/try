import React from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
const classes = [
  {
    semester: "Class-11",
    level: "+2",
    faculty: "Science-Bio",
    section: "A",
  },
];

const RenderTable = () => {
  return (
    <tbody>
      {classes.map((classs, index) => (
        <>
          <tr key={index}>
            <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
              {classs.semester}
            </td>
            <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
              {classs.level}
            </td>
            <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
              {classs.faculty}
            </td>
            <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
              {classs.section}
            </td>

            <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap text-end">
              <Link
                to={`${classs.semester}-${classs.faculty}-${classs.section}`}
                className="px-3 py-4 text-sm font-medium text-primary-btn whitespace-nowrap"
              >
                View
              </Link>
            </td>
          </tr>
        </>
      ))}
    </tbody>
  );
};

export default RenderTable;
