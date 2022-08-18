import React from "react";
import { Link } from "react-router-dom";

const RenderTable = ({
  currentItems,
  subject,
  selectedPeople,
  setSelectedPeople,
}) => {
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr
          className={selectedPeople.includes(person) ? "bg-gray-50" : undefined}
          key={index}
        >
          <td className="sm:w-16 sm:px-8 relative w-12 px-6">
            {selectedPeople.includes(person) && (
              <div className="absolute inset-y-0 left-0 w-0.5 bg-primary-btn" />
            )}
            <input
              type="checkbox"
              className="left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md"
              value={person.invoiceStatus}
              checked={selectedPeople.includes(person)}
              onChange={(e) =>
                setSelectedPeople(
                  e.target.checked
                    ? [...selectedPeople, person]
                    : selectedPeople.filter((p) => p !== person)
                )
              }
            />
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.stdId}
          </td>
          <td className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm">
            <Link to={`${person.stdName}/${person.stdId}`}>
              {person.stdName}
            </Link>
          </td>
          {subject.map((sub, i) => (
            <td
              className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
              key={i}
            >
              {person[sub]}
            </td>
          ))}

          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.total}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.percentage}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.remark}
          </td>

          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.status}
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
