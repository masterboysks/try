import { useState } from "react";

import AboveForm from "./AboveForm";
import DetailsForm from "./DetailsForm";

const AddStudent = () => {
  const [HasAnotherChild, setHasAnotherChild] = useState(false);
  return (
    <div className="sm:ml-[72px] box-border md:ml-0 md:w-full  md:min-w-0 flex-1z">
      <div className=" absolute left-0 w-full top-28 sm:mt-9 md:block sm:static -z-10 ">
        <div className="-z-10 w-11/12 mx-auto text-sm ">
          <AboveForm />
          <DetailsForm anotherChildToggle={setHasAnotherChild} />
        </div>
      </div>
    </div>
  );
};

export default AddStudent;
