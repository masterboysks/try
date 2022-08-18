import React from "react";

const Break = ({ title }) => {
  return (
    <div className="mt-12">
      <div className="relative">
        <div
          className="-z-10 absolute inset-0 flex items-center"
          aria-hidden="true"
        >
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-start">
          <span className="-z-10 pr-2 text-sm font-semibold text-gray-700 bg-white">
            {title}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Break;
