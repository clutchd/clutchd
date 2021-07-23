import classNames from "classnames";
import * as React from "react";

export interface IInputField
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  error?: boolean;
  helperText?: string;
}

export default function InputField({
  error,
  helperText,
  ...props
}: IInputField) {
  const className = classNames(
    props.className,
    `text-gray-900 w-full rounded-md border text-base font-normal transition-all px-2 py-1 
    outline-none shadow-sm`,
    getStateClasses()
  );

  function getStateClasses(): string {
    if (props.readOnly) {
      return "bg-gray-50 border-gray-300 focus:ring-opacity-50 focus:ring focus:border-blue-300 focus:ring-blue-300";
    }

    if (props.disabled) {
      return "bg-gray-50 border-gray-300";
    }

    if (error) {
      return "bg-white border-red-500 focus:ring-opacity-50 focus:ring focus:ring-red-300";
    }

    return "border-gray-400 focus:ring-opacity-50 focus:ring focus:border-blue-300 focus:ring-blue-300";
  }

  return (
    <>
      <input {...props} className={className} />
      <div
        className={`pt-1 mb-2 text-sm text-red-600 transition-all ${
          helperText ? "h-6" : "h-0"
        }`}
      >
        {helperText}
      </div>
    </>
  );
}
