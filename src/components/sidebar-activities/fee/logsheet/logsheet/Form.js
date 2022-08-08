import React, { useState } from "react";
import Break from "../../break";
import Table from "./EntryTable";

export const Form = () => {
  const [entryType, setEntryType] = useState(false);
  const entryOnChange = (e) => {
    setEntryType({ entry: e.target.value });
  };

  return (
    <>
      <Break title="Logsheet"></Break>
      <form className="my-6">
        <input
          type="radio"
          name="entry"
          id="normal"
          value="normal"
          onChange={entryOnChange}
        />
        <label htmlFor="normal" className="ml-2 mr-6">
          Normal entry
        </label>
        <input
          type="radio"
          name="entry"
          id="discount"
          value="discount"
          onChange={entryOnChange}
        />
        <label htmlFor="discount" className="ml-2">
          Discount entry
        </label>
      </form>
      <Table type={entryType}></Table>
    </>
  );
};
