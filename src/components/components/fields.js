import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import React, { useState, useEffect, Fragment } from "react";
//   required="required"(string) or undefined(Dont provide)
// for radio and select provide with array of value
// checkbox
export const Checkbox = ({
  label,
  name,
  value: options,
  required,
  selected,
  dataTitle,
  dataValue,
  id,
}) => {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);
  const [select, setSelect] = useState([...selected]);
  return (
    <>
      {options.map((curr, i) => (
        <>
          <div className="flex items-center h-5">
            <input
              id={id}
              name={name}
              type="checkbox"
              required={required}
              {...optional}
              checked={select.includes(curr)}
              className="focus:ring- text-primary-btn focus:ring-0 focus:ring-offset-0 w-4 h-4 border-gray-300 rounded"
              onChange={(e) => {
                const values = [...select];
                values.includes(e.target.value)
                  ? values.pop(e.target.value)
                  : values.push(e.target.value);
                setSelect(values);
              }}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="comments" className="font-sm text-primary-grey-700">
              {label[i]}
            </label>
          </div>
        </>
      ))}
    </>
  );
};
// Radio bth
export const Radio = ({
  label,
  name,
  value: options,
  required,
  selected,
  dataTitle,
  dataValue,
}) => {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);
  const [select, setSelect] = useState(selected);
  const handleChange = (e) => {
    const target = e.target;
    if (target.checked) {
      setSelect(target.value);
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
            checked={select === curr}
            onChange={handleChange}
            {...optional}
            required={required}
          />
          <div className="mr-2">{label[i]}</div>
        </label>
      ))}
    </>
  );
};
// Input field
export const Input = ({
  label,
  id,
  type,
  name,
  value,
  placeholder,
  required,
  dataTitle,
  dataValue,
}) => {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);
  const [val, setVal] = useState(value);
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
        required={required}
        type={type}
        {...optional}
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </>
  );
};
// Input disabled field
export const InputDisabled = ({
  label,
  id,
  name,
  value,
  type,
  dataTitle,
  dataValue,
}) => {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);
  const [val, setVal] = useState(value);
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
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </>
  );
};
// Select
export function Select({
  required,
  label,
  id,
  name,
  value: options,
  selectedValue,
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
        defaultValue={selectedValue}
        name={name}
        id={id}
        requied={required}
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
  required,
  label,
  id,
  name,
  value: options,
  selectedValue,
  dataTitle,
  dataValue,
}) {
  const [selectedPeople, setSelectedPeople] = useState([...selectedValue]);
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);
  return (
    <>
      <label className="my-6 text-sm" htmlFor="Student Id">
        {label}
      </label>
      <Listbox
        value={selectedPeople}
        onChange={setSelectedPeople}
        multiple
        id={id}
        name={name}
        required={required}
      >
        <div className="relative mt-[6px]">
          <Listbox.Button className="  h-[38px]  p- rounded focus:ring-primary-btn focus:ring-2 border px-2   border-primary-field shadow-md placeholder:text-primary-grey-400    text-primary-grey-700 text-sm relative w-full text-left  ">
            <span className="block pr-2 truncate">
              {selectedPeople.map((person) => person.name).join(", ")}
            </span>
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
                        {person.name}
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
export function SearchBar({ id, dataTitle, dataValue, searchHandaller }) {
  const optional = {};
  dataTitle && (optional[dataTitle] = dataValue);
  const [val, setVal] = useState("");
  useEffect(() => {
    searchHandaller(val);
  }, [val]);

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
        value={val}
        onChange={(e) => {
          setVal(e.target.value);
        }}
      />
    </div>
  );
}
