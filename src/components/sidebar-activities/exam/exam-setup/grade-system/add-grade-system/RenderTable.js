import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Input } from "../../../../../components/fields";
export default function RenderTable({
  index,
  inputFiled,
  setInputFiled,
  inputFields,
}) {
  const handleChange = (index, event) => {
    let data = [...inputFields];
    data[index][event.target.name] = event.target.value;
    setInputFiled(data);
  };
  return (
    <tr>
      <td className="p-2">
        <Input
          placeholder="80"
          name="lowerLimit"
          type="number"
          value={inputFiled.lowerLimit}
          onChange={(e) => handleChange(index, e)}
        />
      </td>
      <td className="p-2">
        <Input
          name="upperLimit"
          placeholder="90"
          type="number"
          value={inputFiled.upperLimit}
          onChange={(e) => {
            handleChange(index, e);
          }}
        />
      </td>
      <td className="p-2">
        <Input
          placeholder="A"
          name="grade"
          value={inputFiled.grade}
          onChange={(e) => {
            handleChange(index, e);
          }}
        />
      </td>
      <td className="p-2">
        <Input
          placeholder="4"
          name="gpa"
          type="number"
          value={inputFiled.gpa}
          onChange={(e) => {
            handleChange(index, e);
          }}
          step="0.1"
        />
      </td>

      <td>
        {index === 0 ? (
          <></>
        ) : (
          <div
            className=" text-primary-grey-700 w-fit p-1 mx-1 bg-white rounded-full shadow"
            onClick={() => {
              setInputFiled(inputFields.slice(0, -1));
            }}
          >
            <CloseOutlinedIcon fontSize="small" />
          </div>
        )}
      </td>
    </tr>
  );
}
