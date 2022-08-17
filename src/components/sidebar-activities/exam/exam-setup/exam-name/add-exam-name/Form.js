import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Input, Select } from "../../../../../components/fields";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../../../components/Buttons";
export default function Form() {
  const arrayLevel = ["dsfjkh", "dsfsdajkh"];
  const [addExamName, setAddExamName] = useState([]);
  const [level, setLevel] = useState("Select");
  const [examName, setExamName] = useState("");
  const [errorLevel, setErrorLevel] = useState(false);
  const [errorExamName, setErrorExamName] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ examName, level, addExamName });
    let temp = false;
    examName || ((temp = true) && setErrorExamName(true));
    level === "Select" && (temp = true) && setErrorLevel(true);
    temp || navigate("/exam/exam-setup/exam-name");
  };
  return (
    <form className="form-solid w-full my-6 rounded-md">
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div>
          <Select
            label="Level*"
            value={arrayLevel}
            selected={level}
            setSelected={setLevel}
            error={errorLevel}
            setError={setErrorLevel}
          />
        </div>
        <div className="lg:row-start-auto row-start-2">
          <Input
            label="Exam name*"
            placeholder="First term"
            value={examName}
            setValue={setExamName}
            error={errorExamName}
            setError={setErrorExamName}
          />

          <>
            {addExamName.map((c, i, array) => (
              <div className=" relative h-fit" key={i}>
                <Input
                  placeholder="Preboard"
                  className={" h-fit "}
                  value={c.value}
                  // value={c.value}
                  onChange={(e) => {
                    let temp = [...array];
                    temp[i]["value"] = e.target.value;

                    setAddExamName(temp);
                  }}
                />

                <div
                  className=" -right-10 text-primary-grey-700 top-[10px] absolute p-1 bg-white rounded-full shadow"
                  onClick={() => {
                    setAddExamName(addExamName.slice(0, -1));
                  }}
                >
                  <CloseOutlinedIcon fontSize="small" />
                </div>
              </div>
            ))}
          </>

          <div
            className="text-primary-grey-700 flex items-center justify-end mt-3"
            onClick={() => {
              setAddExamName([...addExamName, { value: "" }]);
            }}
          >
            <div className="">Add</div>
            <div className="icon border-primary-field p-1 ml-2 border rounded-lg">
              <AddOutlinedIcon fontSize="small" />
            </div>
          </div>
        </div>
      </div>
      <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
        <div className="md:flex-row w-fit lg:col-span-2 flex flex-col my-6 ml-auto">
          <div className=" w-fit">
            <Link to="/exam/exam-setup/exam-name">
              <SecondaryButton>Cancel</SecondaryButton>
            </Link>
            <PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
          </div>
        </div>
      </div>
    </form>
  );
}
