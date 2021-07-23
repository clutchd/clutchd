import * as React from "react";
import { Component, IComponent } from "../component";

export interface IButton extends IComponent {}

export default function Button({
  type = "button",
  children,
  ...props
}: IButton) {
  return (
    <Component
      {...props}
      tag="button"
      className={props.className}
      onClick={props.onClick}
      type={type}
      children={children}
    />
  );
}
