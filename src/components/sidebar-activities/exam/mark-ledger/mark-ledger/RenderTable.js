import { Link } from "react-router-dom";

const RenderTable = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((person, index, table) => (
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
            {person.sec}
          </td>

          <td className="whitespace-nowrap text-primary-btn  relative px-3 py-4 text-sm">
            <Link to={`view/${person.class}/${person.sec}`}>View</Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
