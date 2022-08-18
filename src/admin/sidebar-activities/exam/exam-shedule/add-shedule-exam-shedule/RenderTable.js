export default function RenderTable({ person }) {
  return (
    <tr>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-left text-gray-500">
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
