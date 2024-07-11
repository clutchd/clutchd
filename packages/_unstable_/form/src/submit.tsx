import { Button, IButton } from "@clutchd/button";
import { Component } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Submit` component
 */
type ISubmit = IButton;

/**
 * Type to define `Submit` props
 */
interface ISubmitProps {}

/**
 * Type to define `Submit` props with html attributes
 */
interface ISubmitHtmlProps
  extends ISubmitProps,
    React.ComponentPropsWithoutRef<typeof Component.button> {}

/**
 * `Submit` - A button component used to submit forms
 * @param props `ISubmitHtmlProps` used to render this `Submit`
 * @returns `Submit` component
 */
const Submit = React.forwardRef<ISubmit, ISubmitHtmlProps>(
  ({ type = "submit", ...props }, forwardedRef) => {
    return <Button type={type} ref={forwardedRef} {...props} />;
  },
);

Submit.displayName = "Submit";

export { Submit };
export type { ISubmit, ISubmitHtmlProps, ISubmitProps };
