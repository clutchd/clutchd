import { Card, CardDivider } from "@clutchd/card";
import { TextInput } from "@clutchd/input";
import { Text, Title } from "@clutchd/text";
import React from "react";
import { Showcase } from ".";

function InputShowcase() {
  const [error, setError] = React.useState("An error has occurred!");
  const inputRef = React.useRef(null);

  return (
    <Showcase title="Input">
      <Card asChild>
        <form>
          <Title>Text Input</Title>
          <CardDivider />
          <Text>Default</Text>
          <TextInput description="A default text input" />
          <CardDivider />
          <Text>Disabled</Text>
          <TextInput description="This is a disabled text input" disabled />
          <CardDivider />
          <Text>Read Only</Text>
          <TextInput description="This is a read only text input" readOnly />
          <CardDivider />
          <Text>Errored</Text>
          <TextInput
            description="This is a text input with an error"
            error={"An error has occurred"}
          />
          <CardDivider />
          <Text>Errored and Fixable</Text>
          <TextInput
            ref={inputRef}
            description="This is a text input with a dynamic error state"
            error={error}
            onChange={() =>
              setError(!inputRef.current?.value ? "An error has occurred!" : "")
            }
          />
        </form>
      </Card>
    </Showcase>
  );
}

export { InputShowcase };
