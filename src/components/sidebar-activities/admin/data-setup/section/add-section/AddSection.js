import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../../../../components/fields";
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
    name: "Section",
    href: "/admin/data-setup/section",
    current: false,
  },
  {
    name: "Add",
    href: "/admin/data-setup/section/add",
    current: true,
  },
];
const AddSection = () => {
  const [section, setSection] = useState("");
  const [errorSection, setErrorSection] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = () => {
    console.log({ section });

    section ? navigate("/admin/data-setup/section") : setErrorSection(true);
  };
  return (
    <>
      <Breadcurm pages={pages} />
      <Break title="Add section" />
      <form className="form-solid w-full my-6 rounded-md">
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div>
            <Input
              label="Section*"
              type="text"
              placeholder="A"
              value={section}
              setError={setErrorSection}
              error={errorSection}
              setValue={setSection}
            />
          </div>
        </div>
        <div className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid grid-cols-1 gap-4">
          <div className="md:flex-row w-fit flex flex-col my-6 ml-auto">
            <div className=" w-fit my-auto">
              <Link
                to="/admin/data-setup/section"
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

export default AddSection;
