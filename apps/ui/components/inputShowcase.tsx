import { Card, CardDivider } from "@clutchd/card";
import { TextInput } from "@clutchd/input";
import { Text, Title } from "@clutchd/text";
import React from "react";
import { Showcase } from ".";

function InputShowcase() {
  const [generalError, setGeneralError] = React.useState(
    "An error has occurred!"
  );
  const generalInput = React.useRef(null);

  return (
    <Showcase title="Input">
      <Card asChild>
        <form>
          <Title>Input (General)</Title>
          <CardDivider />
          <Text>With Help Text</Text>
          <TextInput helpText="An input with help text" />
          <CardDivider />
          <Text>With Placeholder</Text>
          <TextInput placeholder="Placeholder..." />
          <CardDivider />
          <Text>Disabled</Text>
          <TextInput disabled />
          <CardDivider />
          <Text>Read Only</Text>
          <TextInput readOnly />
          <CardDivider />
          <Text>Forced Error</Text>
          <TextInput error={"An error has occurred"} />
          <CardDivider />
          <Text>Dynamic Error</Text>
          <TextInput
            ref={generalInput}
            error={generalError}
            onChange={() =>
              setGeneralError(
                !generalInput.current?.value ? "An error has occurred!" : ""
              )
            }
          />
          <CardDivider />
        </form>
      </Card>
      <Card asChild>
        <form>
          <Title>Text Input</Title>
          <CardDivider />
          <Text>Default</Text>
          <TextInput />
          <CardDivider />
          <Text>Default with props</Text>
          <TextInput
            helpText="A default text input"
            placeholder="Placeholder..."
          />
        </form>
      </Card>
    </Showcase>
  );
}

export { InputShowcase };
