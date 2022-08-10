export default function RenderTable({
  person,
  selectedPeople,
  setSelectedPeople,
  table,
  index,
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
        {person.subject}
      </td>
      <td className="whitespace-nowrap text-primary-grey-600 px-3 py-4 text-sm">
        {person.type}
      </td>
      <td className="p-2">
        <input
          type="date"
          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        />
      </td>
      <td className="p-2">
        <input
          type="text"
          name="total"
          disabled
          id="total"
          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        />
      </td>
    </tr>
  );
}
