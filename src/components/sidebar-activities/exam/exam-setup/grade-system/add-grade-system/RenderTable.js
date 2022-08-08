import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
export default function RenderTable({ type, index, setEntry, entry }) {
  return (
    <tr>
      <td className="p-2">
        <input
          type="number"
          name="date"
          id="date"
          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
          placeholder="80"
        />
      </td>
      <td className="p-2">
        <input
          type="number"
          placeholder="90"
          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        />
      </td>
      <td className="p-2">
        <input
          type="text"
          name="ammount"
          id="ammount"
          placeholder="A"
          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn   shadow-md border-primary-field  placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        />
      </td>
      <td className="p-2">
        <input
          type="number"
          name="ammount"
          id="ammount"
          placeholder="3.6"
          className="mt-[6px] w-full p- rounded  focus:ring-primary-btn   shadow-md border-primary-field  placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        />
      </td>

      <td>
        {index === 0 ? (
          <></>
        ) : (
          <div
            className=" text-primary-grey-700 w-fit p-1 mx-1 bg-white rounded-full shadow"
            onClick={() => {
              // console.log(examName.slice(0, -1));
              setEntry(entry.slice(0, -1));
            }}
          >
            <CloseOutlinedIcon fontSize="small" />
          </div>
        )}
      </td>
    </tr>
  );
}
