import { Link } from "react-router-dom";

const RenderTable = ({ currentItems, setOpen }) => {
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
            {person.paymentType}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.particular}
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

          <td className="whitespace-nowrap text-primary-btn px-3 py-4 text-sm">
            <span
              className="cursor-pointer"
              onClick={() => {
                setOpen(true);
              }}
            >
              View
            </span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
