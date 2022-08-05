import ThreeDots from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";

export default function RenderTable({
  person,
  selectedPeople,
  setSelectedPeople,
}) {
  return (
    <tr className={selectedPeople.includes(person) ? "bg-gray-50" : undefined}>
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
      <td className="whitespace-nowrap py-4 pr-3 text-sm text-left text-gray-500">
        {person.class}
      </td>
      <td className="whitespace-nowrap text-primary-grey-600 px-3 py-4 text-sm">
        {person.level}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.faculty}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.section}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.noOfStd}
      </td>
      <td className="w-72">{person.invoiceStatus}</td>
      <td
        className="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
        onMouseOver={() => {
          document
            .getElementById(`${person.class}-${person.section}`)
            .classList.remove("hidden");
        }}
        onMouseLeave={() => {
          document
            .getElementById(`${person.class}-${person.section}`)
            .classList.add("hidden");
        }}
      >
        <ThreeDots className="devMenuTable" />
        <table
          className="divide-y-2 absolute -ml-[64px] hidden bg-white shadow-lg w-12 rounded "
          id={`${person.class}-${person.section}`}
        >
          <tbody>
            <tr>
              <td className="p-3">
                <Link to={`${person.class}-${person.section}`}>
                  Fee statement
                </Link>
              </td>
            </tr>
            <tr>
              <td className="p-3">
                <Link to={`${person.class}-${person.section}/monthly`}>
                  Monthly fee statement
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}
