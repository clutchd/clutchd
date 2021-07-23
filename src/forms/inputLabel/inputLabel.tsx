import classNames from "classnames";
import * as React from "react";
import { DetailedHTMLProps, LabelHTMLAttributes } from "react";

export interface IInputLabel
  extends DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export default function InputLabel({ ...props }: IInputLabel) {
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
