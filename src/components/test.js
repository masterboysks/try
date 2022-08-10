import React, { useState } from "react";
import { Input, Radio, Select } from "./components/fields";

export default function Test() {
  const [input, setInput] = useState("");
  const [radio, setRadio] = useState();
  const [select, setSelect] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <Input
          id="input"
          type="text"
          name="input"
          label="This is input"
          placeholder="Input"
          required="required"
          value={radio}
          setValue={setRadio}
        />
        <Radio
          id="radio"
          name="radio"
          label={["This is input", "This is not input"]}
          required="required"
          value={["inputof", "notinputof"]}
          select={radio}
          setSelect={setInput}
        />
        <Select
          id="select"
          name="select"
          label="This is select"
          required="required"
          value={["input", "not input"]}
          select={select}
          setSelect={setSelect}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
