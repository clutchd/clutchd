import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import * as React from "react";
import { IInput, IInputProps, Input } from "./input";
import {
  validateName,
  validateReadOnlyRequired,
  validateType,
} from "./validate";

/**
 * Type to define `TextInput` element
 */
type ITextInput = IInput;

/**
 * Type to define `TextInput` props
 */
interface ITextInputProps extends IInputProps {
  defaultValue?: string;
  value?: string;
}

/**
 * `TextInput` - An input element for text input
 * @param props `ITextInputProps` used to render this `TextInput`
 * @returns `TextInput` component
 */
const TextInput = React.forwardRef<
  ITextInput,
  ITextInputProps & IComponentPropsWithoutRef<typeof Component.input>
>(
  (
    {
      accept,
      alt,
      autoComplete,
      autoCorrect,
      capture,
      checked,
      //dirname,
      disabled,
      form,
      formAction,
      formEncType,
      formMethod,
      formNoValidate,
      formTarget,
      height,
      inputMode,
      list,
      max,
      maxLength,
      min,
      minLength,
      multiple,
      name,
      pattern,
      placeholder,
      readOnly,
      required,
      size,
      src,
      step,
      title,
      type = "text",
      value,
      width,
      ...props
    },
    forwardedRef
  ) => {
    // trim all unsupported input props
    let inputProps: Partial<
      ITextInputProps & IComponentPropsWithoutRef<typeof Component.input>
    > = {
      autoComplete,
      autoCorrect,
      disabled,
      form,
      inputMode,
      list,
      maxLength,
      minLength,
      name,
      pattern,
      placeholder,
      readOnly,
      required,
      size,
      title,
      value,
    };

    // validate props
    React.useEffect(() => {
      validateName(name);
      validateReadOnlyRequired(readOnly, required);
      validateType("text", type);
    }, []);

    return <Input type="text" ref={forwardedRef} {...inputProps} {...props} />;
  }
);

TextInput.displayName = "TextInput";

export { TextInput };
export type { ITextInput, ITextInputProps };
