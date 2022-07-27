import { Link } from "react-router-dom";

const students = [
  {
    date: "2022/8/10",
    stdId: "1243",
    stdName: "Ranjit",
    status: "Present",
    reason: "",
  },
];
const RenderTable = () => {
  return (
    <>
      {students.map((person, index) => (
        <tr key={index}>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.date}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.stdId}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.stdName}
          </td>

          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.status}
          </td>
          <td className="px-3 py-4 text-sm text-gray-500 whitespace-nowrap ">
            {person.reason}
          </td>
          <td className="px-3 py-4 text-sm font-medium text-primary-btn whitespace-nowrap">
            <Link to="/student/student-attendence/">View</Link>
          </td>
        </tr>
      ))}
    </>
  );
};

export default RenderTable;
