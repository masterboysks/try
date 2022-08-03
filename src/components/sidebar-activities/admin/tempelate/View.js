import React from "react";

function View({ photo, templateId, templateName }) {
  return (
    <div className=" relative">
      <label htmlFor={templateId} className="w-fit z-[1] relative flex mx-auto">
        <img
          src={photo}
          alt={templateName}
          className="h-44 w-fit object-none"
        />
        <input
          id={templateId}
          type="radio"
          name={templateName}
          className=" -right-2 -top-2 absolute"
        />
      </label>
      <div className=" absolute top-0 grid w-full h-full">
        <a
          rel="noopener noreferrer"
          target="_blank"
          href={photo}
          className=" justify-self-center z-20 p-2 my-auto bg-white rounded-lg"
        >
          View
        </a>
      </div>
    </div>
  );
}

export default View;
