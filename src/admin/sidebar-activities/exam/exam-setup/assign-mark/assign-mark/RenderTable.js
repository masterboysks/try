import { Link } from "react-router-dom";

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={person.stdId}>
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
            {person.sec}
          </td>

          <td className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm">
            <Link to={`assign/${person.class}/${person.sec}`}>Assign</Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
