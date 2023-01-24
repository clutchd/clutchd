import { FlexCol, FlexRow } from "@clutchd/flex";
import { isEmpty } from "@clutchd/is-empty";
import * as React from "react";

/**
 * Type to define `InputInfo` props
 */
interface IInputInfoProps {
  description?: string;
  error?: string | boolean;
}

/**
 * `InputInfo` - A small text component used to render form input details and errors
 * @param props `IInputInfoProps` used to render this `InputInfo`
 * @returns `InputInfo` component
 */
function InputInfo({ error, description }: IInputInfoProps) {
  const [descriptionVisible, setDescriptionVisible] = React.useState(false);
  const [errorVisible, setErrorVisible] = React.useState(false);

  React.useEffect(() => {
    setDescriptionVisible(!isEmpty(description));
  }, [description]);

  React.useEffect(() => {
    setErrorVisible(!isEmpty(error));
  }, [error]);

  return (
    <FlexCol className="block overflow-hidden text-sm">
      {descriptionVisible && (
        <FlexRow asChild>
          <span className="text-gray-500">{description}</span>
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
