const { useState } = React;
const Input = ({ value, onChange, error }) => {
  return (
    <>
      <input class="input" value={value} onChange={onChange} type="text" />
      {error && <>Provide valid value</>}
    </>
  );
};

const App = () => {
  const [input, setValue] = useState("");
  const [name, setName] = useState("Chris");
  const [error, setError] = useState(false);
  handleInput = (event) => {
    setValue(event.target.value);
  };

  updateName = (event) => {
    event.preventDefault();
    if (!(input.trim() === "")) {
      setName(input);
      setValue("");
    } else {
      setError(true);
    }
  };

  return (
    <div className="box">
      <h1>
        Hello, <span>{name}!</span>
      </h1>

      <form className="form">
        <div class="field">
          <label for="name-1">Update Name</label>
          <div class="control">
            <Input value={input} onChange={handleInput} error={error} />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button onClick={updateName} class="button is-dark">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

// import React from "react";
// import { Formik } from "formik";

// const Basic = () => (
//   <div>
//     <h1>Anywhere in your app!</h1>
//     <Formik
//       initialValues={{ email: "", password: "" }}
//       validate={(values) => {
//         const errors = {};
//         if (!values.email) {
//           errors.email = "Required";
//         } else if (
//           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
//         ) {
//           errors.email = "Invalid email address";
//         }
//         return errors;
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//           alert(JSON.stringify(values, null, 2));
//           setSubmitting(false);
//         }, 400);
//       }}
//     >
//       {({
//         values,
//         errors,
//         touched,
//         handleChange,
//         handleBlur,
//         handleSubmit,
//         isSubmitting,
//         /* and other goodies */
//       }) => (
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.email}
//           />
//           {errors.email && touched.email && errors.email}
//           <input
//             type="password"
//             name="password"
//             onChange={handleChange}
//             onBlur={handleBlur}
//             value={values.password}
//           />
//           {errors.password && touched.password && errors.password}
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </form>
//       )}
//     </Formik>
//   </div>
// );

// export default Basic;

// import React, { useState } from "react";
// import { Input, Radio, Select } from "./components/fields";

// export default function Test() {
//   const [input, setInput] = useState(null);
//   const [radio, setRadio] = useState("notinputof");
//   const [select, setSelect] = useState("not input");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log({ input, radio, select });
//   };
//   return (
//     <div className="container mx-auto">
//       <form onSubmit={handleSubmit}>
//         <Input
//           id="input"
//           type="text"
//           name="input"
//           label="This is input"
//           placeholder="Input"
//          error={error}
//           value={input}
//           setValue={setInput}
//         />
//         <Radio
//           id="radio"
//           name="radio"
//           label={["This is input", "This is not input"]}
//          error={error}
//           value={["inputof", "notinputof"]}
//           selected={radio}
//           setSelected={setRadio}
//         />
//         <Select
//           id="select"
//           name="select"
//           label="This is select"
//          error={error}
//           value={["input", "not input"]}
//           selected={select}
//           setSelected={setSelect}
//         />
//         <button type="submit">submit</button>
//       </form>
//     </div>
//   );
// }
