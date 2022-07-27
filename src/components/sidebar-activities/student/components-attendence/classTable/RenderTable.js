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
    <>
      {classes.map((classs, index) => (
        <>
          <tr key={index}>
            <td className="whitespace-nowrap  px-3 py-4 text-sm text-gray-500">
              {classs.semester}
            </td>
            <td className="whitespace-nowrap  px-3 py-4 text-sm text-gray-500">
              {classs.level}
            </td>
            <td className="whitespace-nowrap  px-3 py-4 text-sm text-gray-500">
              {classs.faculty}
            </td>
            <td className="whitespace-nowrap  px-3 py-4 text-sm text-gray-500">
              {classs.section}
            </td>

            <td className="whitespace-nowrap text-end px-3 py-4 text-sm text-gray-500">
              <Link
                to={`${classs.semester}-${classs.faculty}-${classs.section}`}
                className="text-primary-btn whitespace-nowrap px-3 py-4 text-sm font-medium"
              >
                View
              </Link>
            </td>
          </tr>
        </>
      ))}
    </>
  );
};

export default RenderTable;
