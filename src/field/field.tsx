import clsx from "clsx";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";

export interface IField extends HTMLMotionProps<"input"> {
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  readOnly?: boolean;
}

export default function Field({
  error,
  helperText,
  ...props
}: IField) {
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

    return "bg-white border-gray-400 focus:ring-opacity-50 focus:ring focus:border-blue-300 focus:ring-blue-300";
  }

  const classNames = (
    clsx(
      props.className,
      `text-gray-900 w-full rounded-md border text-base font-normal transition-all px-2 py-1 outline-none shadow-sm`,
      getStateClasses()
    )
  );

  return (
    <>
      <motion.input
        {...props}
        className={classNames}>
      </motion.input>
      <div
        className={`pt-1 mb-2 text-sm text-red-600 transition-all ${helperText ? "h-6" : "h-0"
          }`}
      >
        {helperText}
      </div>
    </>
  );
}
