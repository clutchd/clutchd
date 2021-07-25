import * as React from "react";
import classnames from "../../libs/classnames";

export interface ILabel
  extends React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {}

export default function Label({ ...props }: ILabel) {
  return (
    <label
      {...props}
      className={classnames(
        props.className,
        "block w-full text-base font-medium transition-all outline-none text-gray-900 py-1"
      )}
    />
  );
}
