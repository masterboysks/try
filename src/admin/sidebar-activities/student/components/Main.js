import React from "react";
import Form from "./form/Form";
import Table from "./Table/Table";

const Main = () => {
  return (
    <div className=" top-28 md:mt-9 sm:mt-18 md:block sm:static -z-10 absolute left-0 w-full">
      <div className="-z-10 sm:mt-9 w-11/12 mx-auto text-sm">
        <Form></Form>
        <Table />
      </div>
    </div>
  );
};

export default Main;
