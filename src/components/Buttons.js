import React from "react";

export function SecondaryButton({ children, onClick, className }) {
  return (
    <div
      onClick={onClick}
      className={`bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm ${className} `}
    >
      {children}
    </div>
  );
}

export function PrimaryButton({ children, onClick, className }) {
  return (
    <div
      onClick={onClick}
      className={`bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
