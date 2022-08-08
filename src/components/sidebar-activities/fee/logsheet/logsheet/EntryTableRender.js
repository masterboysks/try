export default function RenderTable({ type }) {
  return (
    <tr>
      <td className="p-2">
        <input
          type="date"
          name="date"
          id="date"
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
          name="ammount"
          id="ammount"
          placeholder="12000"
          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn   shadow-md border-primary-field  placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        />
      </td>
      <td className="p-2">
        <input
          type="number"
          name="discount"
          id="discount"
          placeholder="00"
          className={`mt-[6px] w-full p- rounded  focus:ring-primary-btn  ${
            type.entry !== "discount"
              ? " border-primary-field  placeholder:text-primary-grey-400 "
              : "  pointer-events-none border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm "
          } `}
        />
      </td>
      <td className="overscroll-none relative p-2">
        <input
          type="number"
          name="total"
          disabled
          id="total"
          placeholder="12000"
          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        />
        <div className="top-5 -right-3 absolute z-10 w-5"> </div>
      </td>
    </tr>
  );
}
