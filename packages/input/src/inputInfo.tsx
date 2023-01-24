import { FlexCol, FlexRow } from "@clutchd/flex";
import { isEmpty } from "@clutchd/is-empty";
import * as React from "react";

/**
 * Type to define `InputInfo` props
 */
interface IInputInfoProps {
  error?: string | boolean;
  helpText?: string;
}

/**
 * `InputInfo` - A small text component used to render form input details and errors
 * @param props `IInputInfoProps` used to render this `InputInfo`
 * @returns `InputInfo` component
 */
function InputInfo({ error, helpText }: IInputInfoProps) {
  const [helpTextVisible, setHelpTextVisible] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);

  React.useEffect(() => {
    setHelpTextVisible(!isEmpty(helpText));
  }, [helpText]);

  React.useEffect(() => {
    setErrorVisible(!isEmpty(error));
  }, [error]);

  return (
    <FlexCol className="block overflow-hidden text-sm">
      {helpTextVisible && (
        <FlexRow asChild>
          <span className="text-gray-500">{helpText}</span>
        </FlexRow>
      )}
      {errorVisible && (
        <FlexRow asChild>
          <span role="alert" className="mt-1 text-red-500">
            {error}
          </span>
        </FlexRow>
      )}
    </FlexCol>
  );
}

export { InputInfo };
export type { IInputInfoProps };
