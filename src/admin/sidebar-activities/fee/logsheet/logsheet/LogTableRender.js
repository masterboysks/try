import { Link } from "react-router-dom";

const LogTableRender = ({ currentItems, setOpen }) => {
  return (
    <>
      {currentItems.map((person, index, table) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.date}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.billNo}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.total <= 0
              ? `(Rs.${Math.abs(person.total)})`
              : `Rs.${person.total}`}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            Rs.{person.paid}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.due <= 0
              ? `(Rs.${Math.abs(person.due)})`
              : `Rs.${person.due}`}
          </td>

          <td className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm">
            <span
              className="cursor-pointer"
              onClick={() => {
                setOpen(true);
              }}
            >
              Details
            </span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default LogTableRender;
