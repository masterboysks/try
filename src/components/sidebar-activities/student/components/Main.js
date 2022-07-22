import React from "react";
import Form from "./form/Form";
import Table from "./Table";

const Main = () => {
  return (
    <div className=" absolute left-0 w-full top-24 sm:mt-9 md:block sm:static -z-10 ">
      <div className="-z-10 w-11/12 mx-auto text-sm">
        <Form></Form>
        <Table />
      </div>
    </div>
  );
};

export default Main;
