import React from "react";

function Form() {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form className="main-form">
        <div className="form-element">
          <label htmlFor="Student Id">Student Id</label>
          <br />
          <input className="input-field" type="text" placeholder="Id" />
        </div>
        <div className="form-element">
          <label htmlFor="Student Name">Student Name</label>
          <br />
          <input
            className="input-field"
            type="text"
            placeholder="Student Name"
          />{" "}
        </div>
        <div className="form-element">
          <label htmlFor="Class / Semester">Class / Semester</label>
          <br />
          <select className="input-field">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="Faculty">Faculty</label>
          <br />
          <select className="input-field">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="Section">Section</label>
          <br />
          <select className="input-field">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="Status">Status</label>
          <br />
          <select className="input-field">
            <option value="Test">Select</option>
          </select>
        </div>
        <div className="form-element">
          <label htmlFor="Order By">Order By</label>
          <br />
          <select className="input-field">
            <option value="Test">Select</option>
          </select>
        </div>
        {/* <input
          type="submit"
          value="Search"
          onClick={submit}
          className="button-search"
        /> */}
      </form>
    </>
  );
}

export default Form;
