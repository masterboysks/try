import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import StackedSelectAdminUpgrade from "../../../../components/StackedSelectAdminUpgrade";
import { useState } from "react";
import { InputDisabled, Select } from "../../../../components/fields";

const Form = () => {
  // array
  const arrayClassSemester = ["dfsmkhb", "dsjhfg"];
  const arraySelectedSection = ["dfsmkhb", "dsjhfg"];
  const arrayFromLevel = ["dfsmkhb", "dsjhfg"];
  const arrayFromYear = ["dfsmkhb", "dsjhfg"];
  const arrayToLevel = ["dfsmkhb", "dsjhfg"];
  const arrayToYear = ["dfsmkhb", "dsjhfg"];
  // backend this is disabled
  const [fromClassSemester, setFromClassSemester] = useState("Class 12");
  const [fromAvailableSections, setFromAvailableSections] = useState("A, B, C");
  const [toAvailableSections, setToAvailableSections] = useState("A, B, C");
  const [fromSection, setFromSection] = useState("A");
  //
  const [toSelectedSection, setToSelectedSection] = useState("Select");
  const [toClassSemester, setToClassSemester] = useState("Select");
  const [fromLevelStacked, setFromLevelStacked] = useState(arrayFromLevel[0]);
  const [fromYearStacked, setFromYearStacked] = useState(arrayFromYear[0]);
  const [toLevelStacked, setToLevelStacked] = useState("Select");
  const [toYearStacked, setToYearStacked] = useState("Select");
  // error
  const [errorToYearStacked, setErrorToYearStacked] = useState(false);
  const [errorToLevelStacked, setErrorToLevelStacked] = useState(false);
  const [errorToClassSemester, setErrorToClassSemester] = useState(false);
  const [errorToSelectedSection, setErrorToSelectedSection] = useState(false);
  //  submit and error handaling
  const handleClick = () => {
    console.log({
      fromClassSemester,
      fromAvailableSections,
      toAvailableSections,
      fromSection,
      toSelectedSection,
      toClassSemester,
      fromLevelStacked,
      toLevelStacked,
      toYearStacked,
    });
    console.log(setErrorToLevelStacked(true));
    let temp = false;
    toLevelStacked === "Select" &&
      (temp = true) &&
      setErrorToLevelStacked(true);
    toYearStacked === "Select" && (temp = true) && setErrorToYearStacked(true);
    toClassSemester === "Select" &&
      (temp = true) &&
      setErrorToClassSemester(true);
    toSelectedSection === "Select" &&
      (temp = true) &&
      setErrorToSelectedSection(true);
  };
  return (
    <>
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="flex">
            <StackedSelectAdminUpgrade
              label="From:"
              selectedTop={fromLevelStacked}
              selectedBottom={fromYearStacked}
              valueTop={arrayFromLevel}
              valueBottom={arrayFromYear}
              nameTop="kjdsh"
              nameBottom="kdfh"
              disabled={true}
            />
          </div>
          <div className="flex">
            <StackedSelectAdminUpgrade
              label="To:*"
              selectedTop={toLevelStacked}
              selectedBottom={toYearStacked}
              setSelectedTop={setToLevelStacked}
              setSelectedBottom={setToYearStacked}
              errorTop={errorToLevelStacked}
              errorBottom={errorToYearStacked}
              setErrorTop={setErrorToLevelStacked}
              setErrorBottom={setErrorToYearStacked}
              valueTop={arrayToLevel}
              valueBottom={arrayToYear}
              nameTop="kjdsh"
              nameBottom="kdfh"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-4">
          <div>
            <InputDisabled label="Class/Semester" value={fromClassSemester} />
          </div>
          <div>
            <Select
              value={arrayClassSemester}
              label="Class/Semester*"
              setSelected={setToClassSemester}
              selected={toClassSemester}
              error={errorToClassSemester}
              setError={setErrorToClassSemester}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-4">
          <div>
            <InputDisabled
              label="Aviable section"
              value={fromAvailableSections}
            />
          </div>
          <div className="relative">
            <InputDisabled
              label="Aviable section"
              value={toAvailableSections}
            />
            <Link
              to="/admin/data-setup/section/add"
              className=" text-primary-btn absolute lg:hidden top-0  right-0 flex mr-1"
            >
              <AiOutlineEdit className=" cursor-pointer"></AiOutlineEdit>
              <span>Manage</span>
            </Link>
          </div>
          <div className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 h-fit w-fit lg:block items-center justify-center hidden px-3 py-2 mt-auto text-sm font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer">
            <Link to="/admin/data-setup/section/add">Manage section</Link>
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4 my-4">
          <div>
            <InputDisabled label="From Section" value={fromSection} />
          </div>
          <div>
            <Select
              label="Selected section*"
              value={arraySelectedSection}
              selected={toSelectedSection}
              setSelected={setToSelectedSection}
              error={errorToSelectedSection}
              setError={setErrorToSelectedSection}
            />
          </div>
        </div>
      </form>
      <div className="flex justify-between mt-6">
        <span className="mt-auto">Filter by:</span>
        <div
          onClick={handleClick}
          className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 h-fit w-fit lg:block items-center justify-center hidden px-3 py-2 mt-auto text-sm font-medium text-white border border-transparent rounded-md shadow-sm cursor-pointer"
        >
          Upgrade
        </div>
      </div>
    </>
  );
};

export default Form;
