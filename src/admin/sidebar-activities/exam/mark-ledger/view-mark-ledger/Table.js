import { GlobeAltIcon, PrinterIcon } from "@heroicons/react/solid";
import Search from "@mui/icons-material/SearchOutlined";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Input, Select } from "../../../../components/fields";
import RenderTable from "./RenderTable";
const people = [
  {
    subject: "Physics",
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: "Published",
    remark: "pass",
    stdId: 556453127332,
    stdName: "Saurav ",
  },
  {
    subject: "Physics",
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: "Published",
    remark: "pass",
    stdId: 5587667332,
    stdName: "Saurav ",
  },
  {
    subject: "Physics",
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: "Published",
    remark: "pass",
    stdId: 556733256,
    stdName: "Saurav ",
  },
  {
    subject: "Physics",
    English: 100,
    Maths: 0,
    Nepali: 0,
    Social: 100,

    EHP: 32,
    Science: 0,
    total: 0,
    percentage: 32,
    status: "Published",
    remark: "pass",
    stdId: 556733452,
    stdName: "Saurav ",
  },
];
const subject = ["English", "Maths", "Nepali", "Social", "EHP", "Science"];

export default function Table() {
  // Checkbox
  const checkbox = useRef();
  const [checked, setChecked] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const [selectedPeople, setSelectedPeople] = useState([]);

  useLayoutEffect(() => {
    const isIndeterminate =
      selectedPeople.length > 0 && selectedPeople.length < people.length;
    setChecked(selectedPeople.length === people.length);
    setIndeterminate(isIndeterminate);
    checkbox.current.indeterminate = isIndeterminate;
  }, [selectedPeople]);

  function toggleAll() {
    setSelectedPeople(checked || indeterminate ? [] : people);
    setChecked(!checked && !indeterminate);
    setIndeterminate(false);
  }
  // pagination
  const itemsOnPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [currentItems, setCurrentItems] = useState(
    people.slice(0, itemsOnPage)
  );
  const [indexOfLastItem, setIndexOfLastItem] = useState(
    currentPage * itemsOnPage
  );
  const [indexOfFirstItem, setIndexOfFirstItem] = useState(
    indexOfLastItem - itemsOnPage
  );
  const [message, setmessage] = useState("Showing 1 to 2 of 2 results");

  const onNextPage = () => {
    setCurrentPage((curr) => curr + 1);
  };

  const onPreviousPage = () => {
    setCurrentPage((curr) => curr - 1);
  };
  useEffect(() => {
    setIndexOfLastItem(currentPage * itemsOnPage);
  }, [currentPage]);
  useEffect(() => {
    setIndexOfFirstItem(indexOfLastItem - itemsOnPage);
  }, [indexOfLastItem]);
  useEffect(() => {
    setmessage(
      `Showing ${indexOfFirstItem + 1} to ${
        people.length <= indexOfLastItem ? people.length : indexOfLastItem
      } of ${people.length}`
    );
    setCurrentItems(people.slice(indexOfFirstItem, indexOfLastItem));
  }, [indexOfFirstItem]);
  //
  const arrayGradingSystem = ["GPA", "Percentage"];
  const arrayResultStatus = ["kjdhf", "jhgd"];
  const arrayRemark = ["jhfgd", "fdjkh"];
  const [academicYear, setAcademicYear] = useState("");
  const [examName, setExamName] = useState("");
  const [gradingSystem, setGradingSystem] = useState("GPA");
  const [resultStatus, setResultStatus] = useState("Select");
  const [remark, setRemark] = useState("Select");
  const [errorAcademicYear, setErrorAcademicYear] = useState(false);
  const [errorExamName, setErrorExamName] = useState(false);
  //
  const handleSubmit = () => {
    console.log({
      academicYear,
      examName,
      gradingSystem,
      resultStatus,
      remark,
    });
    academicYear || setErrorAcademicYear(true);
    examName || setErrorExamName(true);
  };
  return (
    <>
      {/* search */}
      <form className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ring-1 ring-black ring-opacity-5 form-solid grid grid-cols-1 gap-4 p-4 my-6 rounded-md shadow">
        <div className="">
          <Input
            value={academicYear}
            setValue={setAcademicYear}
            error={errorAcademicYear}
            setError={setErrorAcademicYear}
            placeholder="2078"
            label="Academic Year*"
          />
        </div>
        <div className="">
          <Input
            value={examName}
            setValue={setExamName}
            error={errorExamName}
            setError={setErrorExamName}
            placeholder="First term examination"
            label="Exam name*"
          />
        </div>
        <div className="">
          <Select
            label="Grading system"
            value={arrayGradingSystem}
            setSelected={setGradingSystem}
            selected={gradingSystem}
          />
        </div>
        <div className="">
          <Select
            label="Result status"
            value={arrayResultStatus}
            setSelected={setResultStatus}
            selected={resultStatus}
          />
        </div>
        <div className="">
          <Select
            label="Remark"
            value={arrayRemark}
            setSelected={setRemark}
            selected={remark}
          />
        </div>

        <div className="h-fit w-fit bg-primary-btn sm:box-content xl:col-span-3 box-border px-4 py-3 mt-auto ml-auto text-white rounded cursor-pointer">
          {/* <span className="sm:hidden text-primary-grey-100 text-sm">Search</span> */}
          <Search className="w-4 mx-auto" onClick={handleSubmit}></Search>
        </div>
      </form>
      {/* Table heading */}
      <div className="flex items-center justify-between">
        <div className="md:block hidden text-xl">First Term Examination</div>
        <div className=" flex items-center gap-3">
          <div className="flex items-center">
            <div className="text-primary-btn font-semibold">Publish</div>
            <div className="icon text-primary-btn w-5 ml-2">
              <GlobeAltIcon fontSize="medium" />
            </div>
          </div>
          <div className="">
            <select className="mt-[6px]  sm:w-40 min-w-full p- rounded  focus:ring-primary-btn    border-primary-field bg-white shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm">
              <option value="test">Choose print option</option>
            </select>
          </div>
          <div className="text-primary-btn font-semibold">Print</div>
          <div className="icon text-primary-btn w-5">
            <PrinterIcon />
          </div>
        </div>
      </div>
      {/* table */}
      <div className="my-3">
        <div className=" ring-1 ring-black ring-opacity-5 min-w-full overflow-x-auto rounded-lg shadow">
          <div className="inline-block w-full align-middle">
            <div className=" w-full rounded-lg">
              <table className="min-w-full divide-y divide-gray-300 table-auto">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="sm:w-16 sm:px-8 relative w-12 px-6"
                    >
                      <input
                        type="checkbox"
                        className="left-4 top-1/2 focus:ring-primary-btn border-primary-field placeholder:text-primary-grey-400 text-primary-btn absolute w-4 h-4 -mt-2 text-sm rounded shadow-md"
                        ref={checkbox}
                        checked={checked}
                        onChange={toggleAll}
                      />
                    </th>
                    <th
                      scope="col"
                      className=" py-3.5 pr-3 text-left text-sm font-semibold text-primary-active"
                    >
                      Std.ID
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Student Name
                    </th>
                    {subject.map((curr, i) => (
                      <th
                        key={i}
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                      >
                        {curr}
                      </th>
                    ))}
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Percentage
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Remark
                    </th>

                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-medium text-primary-grey-700   "
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <RenderTable
                    currentItems={currentItems}
                    subject={subject}
                    selectedPeople={selectedPeople}
                    setSelectedPeople={setSelectedPeople}
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <nav
        className=" flex items-center justify-between py-3 bg-white border-t border-gray-200"
        aria-label="Pagination"
      >
        <div className="sm:block hidden">
          <p className="text-sm text-gray-700">{message}</p>
        </div>
        <div className="sm:justify-end flex justify-between flex-1">
          <button
            disabled={indexOfFirstItem === 0}
            onClick={onPreviousPage}
            className="disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
          >
            Previous
          </button>
          <button
            disabled={indexOfLastItem >= people.length}
            onClick={onNextPage}
            className="disabled:opacity-80 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md"
          >
            Next
          </button>
        </div>
      </nav>
      <div className="w-52 grid items-center grid-cols-2 gap-3 mt-3 mb-6 ml-auto">
        <div className="text-primary-700 text-base font-semibold">
          Total Pass
        </div>
        <div className="mt-[6px] w-full p- rounded  focus:ring-primary-btn  border   border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm p-2">
          30
        </div>

        <div className="text-primary-700 text-base font-semibold">
          Total Fail
        </div>
        <div className="mt-[6px] w-full p- rounded  focus:ring-primary-btn  border   border-primary-grey-400 bg-primary-grey-100 shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm p-2 ">
          0
        </div>
      </div>
    </>
  );
}
