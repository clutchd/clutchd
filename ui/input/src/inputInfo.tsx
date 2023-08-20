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
    <div className="flex flex-col w-full h-full overflow-hidden text-sm font-normal">
      {helpTextVisible && (
        <span className="flex flex-row w-full h-full text-gray-500 dark:text-gray-400">
          {helpText}
        </span>
      )}
      {errorVisible && (
        <span
          className={`flex flex-row w-full h-full text-red-500 dark:text-red-400 ${
            helpTextVisible && `mt-1`
          }`}
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
}

export { InputInfo };
export type { IInputInfoProps };
