import React from "react";
import { Button as ReakitButton } from "reakit";
import "../../styles.css";

const classNames = `
rounded-lg px-3 py-1 text-white font-bold bg-electricPurple hover:bg-spaceCadet transition-all duration-200
`;

const Button = ({ children, ...props }) => {
  return (
    <ReakitButton className={classNames} {...props}>
      {children}
    </ReakitButton>
  );
};

export default Button;
