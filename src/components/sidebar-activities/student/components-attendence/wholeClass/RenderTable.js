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
    <tbody>
      {students.map((person, index) => (
        <tr key={index}>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.stdId}
          </td>
          <td className="px-3 py-4 text-sm font-medium text-primary-btn whitespace-nowrap">
            <Link to="/student/student-attendence/Class-11-Science-Bio-A/ranjit">
              {person.stdName}
            </Link>
          </td>

          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.numb}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.status}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.reason}
          </td>
          <td className="px-3 py-4 text-sm font-medium text-primary-btn whitespace-nowrap">
            <Link to="/student/student-attendence/Class-11-Science-Bio-A/ranjit">
              View
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default RenderTable;
