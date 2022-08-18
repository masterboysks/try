import { useState } from "react";
import { MultipleSelect, Select } from "../../../../../components/fields";

const arrayExamNames = [
  "sun",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
];
export default function Form() {
  const arrayClassSemester = ["djhfgsa", "dsfjkhg", "dsjfkg"];
  const [selectedExamNames, setSelectedExamNames] = useState([]);
  const [classSemester, setClassSemester] = useState("Select");

  return (
    <form className="form-solid w-full my-6 rounded-md">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="">
          <Select
            label={"Class/Semester*"}
            value={arrayClassSemester}
            selected={classSemester}
            setSelected={setClassSemester}
          />
        </div>

        <div className="col-span-full xl:col-span-3">
          <MultipleSelect
            label="Exam name*"
            value={arrayExamNames}
            selected={selectedExamNames}
            setSelected={setSelectedExamNames}
          />

          <div className="mt-3">
            *Note:You can select multiple items at once.
          </div>
        </div>
      </div>
    </form>
  );
}
