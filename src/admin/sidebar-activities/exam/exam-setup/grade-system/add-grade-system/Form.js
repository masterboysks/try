import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RenderTable from "./RenderTable";
import { Select } from "../../../../../components/fields";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../../../components/Buttons";
import { Link, Navigate, useNavigate } from "react-router-dom";
export default function Form() {
  const arrayLevel = ["kdsjhf", "dsjjkhujhg"];

  const [level, setLevel] = useState("Select");
  const [errorLevel, setErrorLevel] = useState(false);
  const [inputFileds, setInputFileds] = useState([
    { lowerLimit: "", upperLimit: "", grade: "", gpa: "" },
  ]);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ inputFileds, level });
    let temp = false;
    level === Select && (temp = true) && setErrorLevel(true);
    inputFileds.map((curr) => {
      (curr.lowerLimit && curr.upperLimit && curr.grade && curr.gpa) ||
        (temp = true);
    });
    temp || navigate("/exam/exam-setup/grading-system");
  };
  return (
    <>
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
        </div>
      </form>
      <div className="mt-11 lg:w-2/3 w-full">
        <div
          className={` ring-1 ring-black ring-opacity-5 mb-3 mt-6 min-w-full overflow-x-auto rounded-lg shadow `}
        >
          <div className=" flex flex-col w-full rounded">
            <div className=" overflow-x-auto">
              <table className=" min-w-full divide-y divide-gray-300 table-fixed">
                <thead className="bg-gray-50">
                  <tr className="text-primary-grey-700">
                    <th
                      scope="col"
                      className=" py-3.5 px-3 text-left text-sm font-semibold text-primary-active"
                    >
                      Lower Limit(%)*
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      Upper Limit(%)*
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      Grade*
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-primary-active"
                    >
                      GPA*
                    </th>

                    <th className=""></th>
                  </tr>
                </thead>
                <tbody className=" bg-white divide-y divide-gray-200">
                  {inputFileds.map((curr, index) => {
                    return (
                      <RenderTable
                        key={index}
                        index={index}
                        inputFiled={curr}
                        inputFields={inputFileds}
                        setInputFiled={setInputFileds}
                      ></RenderTable>
                    );
                  })}
                  <tr className="bg-gray-50 ">
                    <td colSpan="5">
                      <div
                        className={`w-fit flex p-2 mx-2 ml-auto cursor-pointer
                        }`}
                      >
                        <div
                          className="w-fit flex items-center justify-center"
                          onClick={() => {
                            setInputFileds([
                              ...inputFileds,
                              {
                                lowerLimit: "",
                                upperLimit: "",
                                grade: "",
                                gpa: "",
                              },
                            ]);
                          }}
                        >
                          <div className="text-primary-btn mx-1">Add new</div>
                          <AddIcon
                            className="text-primary-btn"
                            fontSize="small"
                          />
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="w-fit ml-auto">
          <Link to="/exam/exam-setup/grading-system">
            <SecondaryButton>Cancel</SecondaryButton>
          </Link>
          <PrimaryButton onClick={handleSubmit}>Save</PrimaryButton>
        </div>
      </div>
    </>
  );
}
