import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";

/**
 * Type to define `Form` component
 */
type IForm = React.ElementRef<typeof Component.form>;

/**
 * Type to define `Form` props
 */
interface IFormProps {}

/**
 * Type to define `Form` props with html attributes
 */
interface IFormHtmlProps
  extends IFormProps,
    IComponentPropsWithoutRef<typeof Component.form> {}

/**
 * `Form` - A form component used to render complete forms
 * @param props `IFormHtmlProps` used to render this `Form`
 * @returns `Form` component
 */
const Form = React.forwardRef<IForm, IFormHtmlProps>(
  ({ ...props }, forwardedRef) => {
    return <Component.form ref={forwardedRef} {...props} />;
  },
);

Form.displayName = "Form";

export { Form };
export type { IForm, IFormProps, IFormHtmlProps };
