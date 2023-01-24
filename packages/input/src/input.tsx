import { clsx } from "@clutchd/clsx";
import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { composeEventHandlers } from "@clutchd/compose-event-handlers";
import * as React from "react";
import { IInputInfoProps, InputInfo } from "./inputInfo";

/**
 * Type to define `Input` element
 */
type IInput = React.ElementRef<typeof Component.input>;

/**
 * Type to define `Input` props
 */
interface IInputProps
  extends IInputInfoProps,
    IComponentPropsWithoutRef<typeof Component.input> {}

/**
 * Type to define possible `Input` validation states
 */
type IInputValidationStates = "valid" | "invalid" | "fixed" | undefined;

/**
 * `Input` - A primitive input element that powers various inputs
 * @param props `IInputProps` used to render this `Input`
 * @returns `Input` component
 */
const Input = React.forwardRef<IInput, IInputProps>(
  ({ className, error, helpText, onBlur, ...props }, forwardedRef) => {
    // track validation state of this input
    const [validated, setValidated] =
      React.useState<IInputValidationStates>(undefined);

    // function to update validation state based on current conditions
    function updateValidationState() {
      if (error) {
        setValidated("invalid");
      } else if (validated === "invalid") {
        setValidated("fixed");
      } else {
        setValidated("valid");
      }
    }

    // update validation state when error changes
    React.useEffect(() => {
      updateValidationState();
    }, [error]);

    // ! input components should manage their own validation
    // validate props
    React.useEffect(() => {
      // // validate value prop
      // if (
      //   isEmpty(inputProps.value) &&
      //   (type === "checkbox" || type === "radio" || type === "hidden")
      // ) {
      //   console.warn(
      //     "The value attribute is mandatory for inputs of type `checkbox`, `radio`, and `hidden`."
      //   );
      // }
    }, []);

    return (
      <>
        <Component.input
          aria-invalid={validated === "invalid" ? "true" : "false"}
          className={clsx(
            "block w-full px-2 py-1 text-base font-normal bg-white border rounded-md shadow-sm appearance-none focus:outline-none focus:ring my-1",
            "disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:shadow-none",
            "read-only:border-gray-200 read-only:shadow-none",
            "placeholder:text-gray-400",
            "invalid:border-red-500 invalid:text-red-500 invalid:focus:ring-red-500 invalid:focus:border-red-500",
            validated === "valid" &&
              "text-gray-700 border-gray-300 focus:ring-blue-500/50 focus:border-blue-500",
            validated === "fixed" &&
              "text-green-700 border-green-300 focus:ring-green-500/50 focus:border-green-500",
            validated === "invalid" &&
              "text-red-700 border-red-300 focus:ring-red-500/50 focus:border-red-500",
            className
          )}
          onBlur={composeEventHandlers(onBlur, updateValidationState)}
          ref={forwardedRef}
          {...props}
        />
        <InputInfo error={error} helpText={helpText} />
      </>
    );
  }
);

export { Input };
export type { IInput, IInputProps };
