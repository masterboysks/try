import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Input, Radio, Select } from "../../../../../components/fields";
import Breadnav from "../../../../../components/Breadnav";
import Break from "../../../../../components/Break";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Subject",
    href: "/admin/data-setup/subject",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/data-setup/subject/add",
    current: true,
  },
];
const arraySubjectTypes = ["Compulsary subject", "Elective subject"];
const arrayLevel = ["jhdgf", "dshf", "jkdhsf"];
const AddSubject = () => {
  const [level, setLevel] = useState("Select");
  const [errorLevel, setErrorLevel] = useState(false);
  const [subject, setSubject] = useState("");
  const [errorSubject, setErrorSubject] = useState(false);
  const [creditHours, setCreditHours] = useState("");
  const [errorCreditHours, setErrorCreditHours] = useState(false);
  const [subjectType, setSubjectType] = useState("");
  const [errorSubjectType, setErrorSubjectType] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ level, subject, creditHours, subjectType });
    let temp = false;
    subject || ((temp = true) && setErrorSubject(true));
    creditHours || ((temp = true) && setErrorCreditHours(true));
    subjectType || ((temp = true) && setErrorSubjectType(true));
    level === "Select" && (temp = true) && setErrorLevel(true);

    temp || navigate("/admin/data-setup/subject");
  };
  return (
    <>
      <Breadnav pages={pages} />
      <Break title="Add subject" />
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
          <div>
            <Input
              label="Subject*"
              placeholder="Science"
              value={subject}
              setValue={setSubject}
              error={errorSubject}
              setError={setErrorSubject}
            />
          </div>
          <div>
            <Input
              label="Credit hours*"
              type="number"
              placeholder="80"
              value={creditHours}
              setValue={setCreditHours}
              error={errorCreditHours}
              setError={setErrorCreditHours}
            />
          </div>
          <div className="col-span-full flex my-3 space-x-4">
            <Radio
              value={arraySubjectTypes}
              selected={subjectType}
              setSelected={setSubjectType}
              error={errorSubjectType}
              setError={setErrorSubjectType}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row col-span-full xl:col-span-3 flex flex-col my-6 ml-auto">
            <div className=" w-fit">
              <Link
                to="/admin/data-setup/subject"
                className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm"
              >
                Cancel
              </Link>
              <div
                onClick={handleSubmit}
                className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm"
              >
                Save
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddSubject;
