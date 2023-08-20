import { Button } from "@clutchd/button";
import * as React from "react";
import { Showcase } from ".";

function ButtonShowcase() {
  return (
    <Showcase title="Button" description="A simple, focusable, button.">
      <Button>Click me!</Button>
    </Showcase>
  );
}

export { ButtonShowcase };
