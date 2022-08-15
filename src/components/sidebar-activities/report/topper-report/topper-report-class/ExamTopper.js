import React, { useState } from "react";
import { Select } from "../../../../components/fields";
import RenderTable from "./RenderExamTopperTable";
const currentItems = [
  {
    stdId: "Lindsay Walton",
    stdName: "Front-end Developer",
    obtainedPercentage: "Lindsay Walton",
  },
  {
    stdId: "Lindsa",
    stdName: "Front-end Developer",
    obtainedPercentage: "Lindsay Walton",
  },
  {
    stdId: "Lindsay Wa",
    stdName: "Front-end Developer",
    obtainedPercentage: "Lindsay Walton",
  },
];
export default function ExamTopper() {
  const arrayExamName = ["dhgs", "jfhd", "dghf"];
  const [examName, setExamName] = useState("Select");
  return (
    <>
      <div className=" md:w-6/12 lg:w-3/12 w-full mt-3">
        <Select
          value={arrayExamName}
          label="Exam name"
          selected={examName}
          setSelected={setExamName}
        />
      </div>
      <div className="">
        <div className="my-6">
          <div className=" ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow">
            <div className="inline-block w-full align-middle">
              <div className=" w-full rounded-lg">
                <table className="min-w-full divide-y divide-gray-300 table-auto">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700    "
                      >
                        Student ID
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        Student Name
                      </th>

                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm w-48 font-medium text-primary-grey-700   "
                      >
                        Obtained percent
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <RenderTable currentItems={currentItems} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
