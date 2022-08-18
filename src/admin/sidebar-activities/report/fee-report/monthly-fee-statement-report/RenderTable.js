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
        {person.name}
      </td>
      <td className="whitespace-nowrap text-primary-grey-600 px-3 py-4 text-sm">
        {person.monthlyFee}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.miscellaneousFee}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.previousDue}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {person.total}
      </td>
      <td className="whitespace-nowrap w-40 px-3 py-4 text-sm text-gray-500">
        {person.invoiceStatus}
      </td>
    </tr>
  );
}
