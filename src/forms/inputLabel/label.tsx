import classNames from "classnames";
import * as React from "react";

export interface ILabel
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export default function InputLabel({ ...props }: ILabel) {
  const className = classNames(
    props.className,
    "block w-full text-base font-medium transition-all outline-none text-gray-900 py-1"
  );

  return (
    <label {...props} className={className}>
      {props.children}
    </label>
  );
}
