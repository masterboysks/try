import { Link } from "react-router-dom";

const students = [
  {
    stdId: "1243",
    stdName: "Ranjit",
    numb: "1",
    status: "Present",
    reason: "",
  },
];
const RenderTable = () => {
  return (
    <>
      {students.map((person, index) => (
        <tr key={index}>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.stdId}
          </td>
          <td className="text-primary-btn whitespace-nowrap px-3 py-4 text-sm font-medium">
            <Link to="/student/student-attendence/Class-11-Science-Bio-A/ranjit">
              {person.stdName}
            </Link>
          </td>

          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.numb}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.status}
          </td>
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {person.reason}
          </td>
          <td className="text-primary-btn whitespace-nowrap px-3 py-4 text-sm font-medium">
            <Link to={`${person.stdName}/${person.stdId}`}>View</Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
