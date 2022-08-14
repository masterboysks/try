import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, Input } from "../../../../../components/fields";
import Break from "../../../break";
import Breadcurm from "../../breadcurm";
const pages = [
  { name: "Admin", href: "#", current: false },
  {
    name: "Date setup",
    href: "#",
    current: false,
  },
  {
    name: "Fiscal year",
    href: "/admin/data-setup/fiscal-year",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/data-setup/fiscal-year/add",
    current: true,
  },
];
const AddFiscalYear = () => {
  const [fiscalYearEnd, setFiscalYearEnd] = useState("");
  const [errorFiscalYearEnd, setErrorFiscalYearEnd] = useState(false);
  const [fiscalYearStart, setFiscalYearStart] = useState("");
  const [errorFiscalYearStart, setErrorFiscalYearStart] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ fiscalYearEnd, fiscalYearStart });
    let temp = false;
    fiscalYearEnd || ((temp = true) && setErrorFiscalYearEnd(true));
    fiscalYearStart || ((temp = true) && setErrorFiscalYearStart(true));

    temp || navigate("/admin/data-setup/fiscal-year");
  };
  return (
    <>
      <Breadcurm pages={pages} />
      <Break title="Add fiscal year" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Input
              label="Fiscal year start*"
              placeholder="2072"
              type="number"
              value={fiscalYearStart}
              setValue={setFiscalYearStart}
              error={errorFiscalYearStart}
              setError={setErrorFiscalYearStart}
            />
          </div>
          <div>
            <Input
              label="Fiscal year start*"
              placeholder="2075"
              type="number"
              value={fiscalYearEnd}
              setValue={setFiscalYearEnd}
              error={errorFiscalYearEnd}
              setError={setErrorFiscalYearEnd}
            />
          </div>
          <div className="col-span-full">
            <Checkbox
              selected={isRunning}
              setSelected={setIsRunning}
              label="is running?"
              id="isRunning"
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row sm:col-span-2 w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/data-setup/fiscal-year"
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

export default AddFiscalYear;
