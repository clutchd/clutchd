import * as React from "react";

export interface IButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  type?: "button" | "submit";
}

export default function Button({
  type = "button",
  children,
  ...props
}: IButton) {
  return (
    <button
      {...props}
      type={type}
      className={props.className}
      onClick={props.onClick}
      children={children}
    />
  );
}
