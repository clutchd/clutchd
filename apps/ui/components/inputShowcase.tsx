import { Card, CardDivider } from "@clutchd/card";
import { TextInput } from "@clutchd/input";
import { Grid, GridCol } from "@clutchd/grid";
import { Label } from "@clutchd/label";
import { Title } from "@clutchd/text";
import { FlexRow } from "@clutchd/flex";
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
          <Label content="With Wrapped Label">
            <TextInput />
          </Label>
          <CardDivider />
          <Label htmlFor="label_test">With Label Sibling</Label>
          <TextInput id="label_test" helpText="An input with help text" />
          <CardDivider />
          <Label content="With Help Text">
            <TextInput helpText="An input with help text" />
          </Label>
          <CardDivider />
          <Label content="With Placeholder">
            <TextInput placeholder="Placeholder..." />
          </Label>
          <CardDivider />
          <Label content="Disabled">
            <TextInput disabled />
          </Label>
          <CardDivider />
          <Label content="Read Only">
            <TextInput readOnly />
          </Label>
          <CardDivider />
          <Label content="Required" required>
            <TextInput required />
          </Label>
          <CardDivider />
          <Label content="Forced Error">
            <TextInput error={"An error has occurred"} />
          </Label>
          <CardDivider />
          <Label content="Dynamic Error">
            <TextInput
              ref={generalInput}
              error={generalError}
              onChange={() =>
                setGeneralError(
                  !generalInput.current?.value ? "An error has occurred!" : ""
                )
              }
            />
          </Label>
        </form>
      </Card>
      <Card asChild>
        <form>
          <Title>Text Input</Title>
          <CardDivider />
          <Card>
            <Title>Flex Layout</Title>
            <CardDivider />
            <FlexRow>
              <Label content="Default">
                <TextInput />
              </Label>
              <CardDivider orientation="vertical" />
              <Label content="With Props">
                <TextInput
                  helpText="A default text input"
                  placeholder="Placeholder..."
                />
              </Label>
            </FlexRow>
          </Card>
          <CardDivider />
          <Card>
            <Title>Grid Layout</Title>
            <CardDivider />
            <Grid
              gridCols={1}
              gridColsSm={2}
              gapX={"gap-x-12"}
              gapY={"gap-y-12"}
            >
              <GridCol>
                <Label content="Default">
                  <TextInput />
                </Label>
              </GridCol>
              <GridCol>
                <Label content="With Props">
                  <TextInput
                    helpText="A default text input"
                    placeholder="Placeholder..."
                  />
                </Label>
              </GridCol>
            </Grid>
          </Card>
        </form>
      </Card>
    </Showcase>
  );
}

export { InputShowcase };
