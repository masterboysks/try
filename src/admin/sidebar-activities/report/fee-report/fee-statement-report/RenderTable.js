import { Link } from "react-router-dom";

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.date}
          </td>

          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <Link to={`${person.particular}`}> {person.particular}</Link>
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            Rs.{person.dr}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            Rs.{person.cr}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.balance}
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
