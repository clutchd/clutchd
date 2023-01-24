import * as React from "react";
import { IInput, IInputProps, Input } from "./input";

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
const TextInput = React.forwardRef<ITextInput, ITextInputProps>(
  (
    {
      accept,
      alt,
      autoComplete,
      //autoCorrect,
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
      //inputMode,
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
      //tabIndex,
      //title,
      type = "text",
      value,
      width,
      ...props
    },
    forwardedRef
  ) => {
    // trim all unsupported input props
    let inputProps: Partial<ITextInputProps> = {
      autoComplete,
      disabled,
      form,
      list,
      maxLength,
      minLength,
      name,
      pattern,
      placeholder,
      readOnly,
      required,
      size,
      type,
      value,
    };

    // validate props
    React.useEffect(() => {}, []);

    return <Input type="text" ref={forwardedRef} {...inputProps} {...props} />;
  }
);

TextInput.displayName = "TextInput";

export { TextInput };
export type { ITextInput, ITextInputProps };
