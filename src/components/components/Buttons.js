import React from "react";

export function SecondaryButton({ children }) {
  return (
    <div className="bg-primary-grey-50 text-primary-grey-700 hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 mr-3 text-sm font-medium border border-transparent rounded-md shadow-sm">
      {children}
    </div>
  );
}

export function PrimaryButton({ children }) {
  return (
    <div className="bg-primary-btn hover: focus:outline-none focus:ring- focus:ring-offset-2 sm:w-auto inline-flex items-center justify-center px-4 py-3 text-sm font-medium text-white border border-transparent rounded-md shadow-sm">
      {children}
    </div>
  );
}
