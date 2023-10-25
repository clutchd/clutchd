import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { global, disabled, focus, outline } from ".";
import { composeClassNames as cn } from "@clutchd/compose-props";
import * as React from "react";
import { composeEventHandlers } from "@clutchd/compose-event-handlers";
import { validateName, validateReadOnlyRequired } from "./validate";

/**
 * Type to define `Input` component
 */
type IInput = React.ElementRef<typeof Component.input>;

/**
 * Type to define `Input` props
 */
interface IInputProps {
  variant?: string;
}

/**
 * Type to define `Input` props with html attributes
 */
interface IInputHtmlProps
  extends IInputProps,
  IComponentPropsWithoutRef<typeof Component.input> { }

/**
 * Type to define possible `Input` validation states
 */
type IInputValidationStates = "valid" | "invalid" | "fixed" | undefined;

/**
 * `Input` - A primitive input component that powers all types of inputs
 * @param props `IInputHtmlProps` used to render this `Input`
 * @returns `Input` component
 */
const Input = React.forwardRef<IInput, IInputHtmlProps>(
  ({ className, onBlur, variant = outline, ...props }, forwardedRef) => {
    // track the validation state of this input
    const [state, setState] = React.useState<IInputValidationStates>(undefined);

    // // function to update validation state based on current conditions
    // function updateValidationState() {
    //   if (error) {
    //     setValidated("invalid");
    //   } else if (validated === "invalid") {
    //     setValidated("fixed");
    //   } else {
    //     setValidated("valid");
    //   }
    // }

    // // update validation state when error changes
    // React.useEffect(() => {
    //   updateValidationState();
    // }, [error]);

    // // validate props
    // React.useEffect(() => {
    //   // // validate value prop
    //   // if (
    //   //   isEmpty(inputProps.value) &&
    //   //   (type === "checkbox" || type === "radio" || type === "hidden")
    //   // ) {
    //   //   console.warn(
    //   //     "The value attribute is mandatory for inputs of type `checkbox`, `radio`, and `hidden`."
    //   //   );
    //   // }
    // }, []);

    // // TODO: Bring back theming
    // function getVariantStyles(variant: IInputValidationStates) {
    //   switch (variant) {
    //     case "fixed":
    //       return "focus:bg-green-50 dark:focus:bg-green-500/10 text-green-600 dark:text-green-300 border-green-300 dark:border-green-700 focus:ring-green-500/50 focus:border-green-500";

    //     case "invalid":
    //       return "focus:bg-red-50 focus:dark:bg-red-500/10 text-red-600 dark:text-red-300 border-red-300 dark:border-red-700 focus:ring-red-500/50 focus:border-red-500";

    //     default:
    //     case "valid":
    //       return [
    //         "focus:ring-blue-500/50 focus:dark:ring-blue-400/50 focus:border-blue-500 dark:focus:border-blue-400",
    //         "text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700",
    //       ].join(" ");
    //   }
    // }

    // return (
    //   <>
    //     <InputInfo error={error} helpText={helpText} />
    //   </>
    // );

    return (
      <Component.input
        aria-invalid={state === "invalid" ? true : undefined}
        // className={[
        //   "font-normal shadow-sm text-small disabled:shadow-none read-only:shadow-none invalid:focus:bg-red-50 invalid:dark:focus:bg-red-500/10 invalid:text-red-600 invalid:dark:text-red-300 invalid:border-red-300 invalid:dark:border-red-700 invalid:focus:ring-red-500/50 invalid:focus:border-red-500",
        //   "placeholder:text-gray-400 placeholder:dark:text-gray-500 read-only:border-gray-300/50 read-only:dark:border-gray-700/50 read-only:bg-gray-50/50 read-only:dark:bg-gray-800/50",
        //   getVariantStyles(validated),
        // ].join(" ")}
        className={cn(global, variant, focus, disabled, className)}
        //onBlur={composeEventHandlers(onBlur, updateValidationState)}
        data-valid={state === "valid" || state === "fixed" ? true : undefined}
        data-fixed={state === "fixed" ? true : undefined}
        data-invalid={state === "invalid" ? true : undefined}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
export type { IInput, IInputProps, IInputHtmlProps };
