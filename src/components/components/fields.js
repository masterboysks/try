import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import React, { Fragment, useEffect, useState } from "react";
//   use error for putting required in handle submit
// for radio and select provide with array of value
// checkbox
// pass value for input field
// pass selected for others

export const Checkbox = ({
  label, //array with correct index
  name,
  selected, //true or false
  setSelected,
  dataTitle,
  dataValue,
  id,
}) => {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);

  return (
    <div className="flex items-center h-5">
      <input
        id={id}
        name={name}
        type="checkbox"
        checked={selected}
        {...optional}
        className={`focus:ring- text-primary-btn  w-4 h-4 border-gray-300 rounded `}
        onChange={(e) => {
          setSelected(e.currentTarget.checked);
        }}
      />{" "}
      <div className="ml-3 text-sm">
        <label htmlFor="comments" className="font-sm text-primary-grey-700">
          {label}
        </label>
      </div>
    </div>
  );
};
// Radio bth
export const Radio = ({
  label,
  name,
  error: err,
  value: options,

  selected,
  setSelected,
  dataTitle,
  dataValue,
}) => {
  // useEffect(() => {
  //   console.log(err, name);
  //   error && !selected ? setErr(true) : setErr(false);
  //   console.log(err);
  // }, [error]);

  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);

  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setSelected(target.value);
    }
  };
  return (
    <>
      {options.map((curr, i) => (
        <label key={curr} htmlFor={curr}>
          <input
            type="radio"
            id={curr}
            name={name}
            value={curr}
            checked={selected === curr}
            onChange={handleChange}
            {...optional}
          />
          <div className="mr-2">{label[i]}</div>
        </label>
      ))}
      {err && (
        <span className="text-xs font-light text-red-600">
          This is a required field
        </span>
      )}
    </>
  );
};
// Input field
export const Input = ({
  id,
  name,
  error: err,
  type,
  label,
  value,
  setValue,
  placeholder,
  dataTitle,
  dataValue,
}) => {
  // useEffect(() => {
  //   console.log(err, name);
  //   error && value.trim === "" ? setErr(true) : setErr(false);
  //   console.log(err);
  // });

  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);

  return (
    <>
      <label className="my-6 text-sm" htmlFor={id}>
        {label}
      </label>
      <br />
      <input
        className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        id={id}
        name={name}
        placeholder={placeholder}
        type={type}
        {...optional}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      {console.log(err)}
      {/* {err && (
        <>
          <br />
          <span className="text-xs font-light text-red-600">
            This field is required error
          </span>
        </>
      )} */}
    </>
  );
};
// email field
export const Email = ({
  id,
  name,
  error: err,

  label,
  value,
  setValue,
  placeholder,
  dataTitle,
  dataValue,
}) => {
  // const [err, setErr] = useState();
  // let err = false;
  // const mailRgexp = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";

  // useEffect(() => {
  //   console.log(err, name);
  //   error && value.matches(mailRgexp) ? setErr(true) : setErr(false);
  //   console.log(err);
  // }, [error]);

  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);

  return (
    <>
      <label className="my-6 text-sm" htmlFor={id}>
        {label}
      </label>
      <br />
      <input
        className=" mt-[6px] w-full p- rounded  focus:ring-primary-btn    border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        id={id}
        name={name}
        placeholder={placeholder}
        type="email"
        {...optional}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />{" "}
      {err && (
        <>
          <br />
          <span className="text-xs font-light text-red-600">
            Please enter a valid mail address.
          </span>
        </>
      )}
    </>
  );
};
// Input disabled field
export const InputDisabled = ({
  label,
  id,
  name,
  value,
  setValue,
  type,
  dataTitle,
  dataValue,
}) => {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);

  return (
    <>
      <label className="my-6 text-sm" htmlFor={id}>
        {label}
      </label>
      <br />
      <input
        className=" mt-[6px] w-full p- rounded   focus:ring-primary-btn     bg-primary-grey-100 border-primary-grey-400  shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        id={id}
        name={name}
        disabled
        type={type}
        {...optional}
        value={value || " "}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </>
  );
};
// select disabled
export const SelectDisabled = ({
  label,
  id,
  name,
  value,
  setValue,
  type,
  dataTitle,
  dataValue,
}) => {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);

  return (
    <>
      <label className="my-6 text-sm" htmlFor={id}>
        {label}
      </label>
      <br />
      <select
        className=" mt-[6px] w-full p- rounded   focus:ring-primary-btn     bg-primary-grey-100 border-primary-grey-400  shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm"
        id={id}
        name={name}
        disabled
        type={type}
        defaultValue={value}
        {...optional}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        <option value="">{value}</option>
      </select>
    </>
  );
};
// Select
export function Select({
  label,
  id,
  name,

  value: options,
  selected,
  setSelected,
  dataTitle,
  dataValue,
}) {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);
  return (
    <>
      <label className="my-6 text-sm" htmlFor={id}>
        {label}
      </label>
      <select
        value={selected}
        onChange={(e) => {
          setSelected(e.target.value);
        }}
        name={name}
        id={id}
        {...optional}
        className={`w-full p-2 mt-[6px]  cursor-pointer rounded  focus:ring-primary-btn     shadow-md placeholder:text-primary-grey-400   text-primary-grey-700 text-sm  border-primary-field  required:border-red-600 required:animate-pulse 
        }`}
      >
        {options.map((curr) => (
          <option value={curr} key={curr}>
            {curr}
          </option>
        ))}
      </select>
    </>
  );
}
// Multiple select
export function MultipleSelect({
  id,
  name,
  error: err,
  label,
  value: options, //array
  setSelected,
  selected, //array
  dataTitle,
  dataValue,
}) {
  // const [err, setErr] = useState();
  // let err = false;

  // useEffect(() => {
  //   console.log(err, name);
  //   error && !(selected.length === 0) ? setErr(true) : setErr(false);
  //   console.log(err);
  // }, [error]);

  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);
  return (
    <>
      <label className="my-6 text-sm" htmlFor="Student Id">
        {label}
      </label>
      <Listbox
        value={selected}
        onChange={(e) => {
          setSelected(e);
        }}
        multiple
      >
        <div className="relative mt-[6px]">
          <Listbox.Button
            id={id}
            name={name}
            className="  h-[38px]  p- rounded focus:ring-primary-btn focus:ring-2 border px-2   border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm relative w-full text-left  "
          >
            <span className="block pr-2 truncate">
              {selected.map((person) => person).join(", ")}
            </span>
            {err && (
              <span className="text-red-600">This field is required</span>
            )}
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg">
              {options.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active
                        ? "bg-blue-400 text-white "
                        : "text-primary-grey-600"
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person}
                      </span>
                      {selected ? (
                        <span className=" absolute inset-y-0 left-0 flex items-center pl-3">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
}
export function SearchBar({ id, dataTitle, dataValue, value, setValue }) {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);

  return (
    <div className=" relative w-full">
      <div className="top-1 absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          aria-hidden="true"
          className="text-primary-grey-600 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id={id}
        {...optional}
        className="bg-gray-50 mt-[6px] border border-primary-grey-400 text-primary-grey-600 text-sm rounded focus:ring-primary-btn block w-full pl-10 p-2 "
        placeholder="Search"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
}
// export const CheckboxList = ({
//   label,
//   name,
// error:err,
//   value: options,
//   required,
//   selected,
//   setSelected,
//   dataTitle,
//   dataValue,
//   id,
// }) => {
//   const optional = {};
//   dataTitle && (optional[dataTitle] = dataValue);

//   return (
//     <div>
//       {options.map((curr, i) => (
//         <>
//           <div className="flex items-center h-5">
//             <input
//               id={id}
//               name={name}
//               type="checkbox"
//               {...optional}
//               checked={selected[i]}
//               className="focus:ring- text-primary-btn focus:ring-0 focus:ring-offset-0 w-4 h-4 border-gray-300 rounded"
//               onChange={(e) => {
//                 let temp = selected;
//                 temp.slice(i, 1, e.target.checked);
//                 console.log(e.target.checked);
//                 setSelected(temp);
//               }}
//             />
//             <div className="ml-3 text-sm">
//               <label
//                 htmlFor="comments"
//                 className="font-sm text-primary-grey-700"
//               >
//                 {label[i]}
//               </label>
//             </div>
//           </div>
//         </>
//       ))}
//     </div>
//   );
// };
