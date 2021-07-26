import * as React from "react";
import classnames from "../../libs/classnames";

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
      className={classnames(
        props.className,
        "block w-full text-base font-medium transition-all outline-none text-gray-900 py-1"
      )}
    >
      {props.children}
      {required ? (
        <span className="float-right text-red-600 font-light">*</span>
      ) : null}
    </label>
  );
}
