import clsx from "clsx";
import * as React from "react";

export interface ILabel
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  required?: boolean;
}

export default function Label({ required, ...props }: ILabel) {
  return (
    <label
      {...props}
      className={clsx(
        props.className,
        "block w-full text-base font-medium transition-all outline-none text-gray-900 py-1"
      )}
    >
      {props.children}
      {required ? (
        <span className="pl-1 text-red-600 font-light">*</span>
      ) : null}
    </label>
  );
}
