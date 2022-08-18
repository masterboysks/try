export default function RenderTable({ subject }) {
  return (
    <>
      {subject.map((curr, i) => (
        <tr key={i}>
          {/* subject */}
          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            {curr}
          </td>
          {/* total */}
          <td className="p-2 border-l">
            <input
              type="text"
              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            />
          </td>
          <td className="p-2">
            <input
              type="text"
              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            />
          </td>
          <td className="p-2">
            <input
              type="text"
              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            />
          </td>
          <td className="p-2">
            <input
              type="number"
              name="total"
              disabled
              id="total"
              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            />
          </td>
          {/* pass */}
          <td className="p-2 border-l">
            <input
              type="text"
              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            />
          </td>
          <td className="p-2">
            <input
              type="text"
              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            />
          </td>
          <td className="p-2">
            <input
              type="text"
              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            />
          </td>
          <td className="p-2">
            <input
              type="number"
              name="total"
              disabled
              id="total"
              className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
            />
          </td>
        </tr>
      ))}
    </>
  );
}
