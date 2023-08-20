import { Button } from "@clutchd/button";
import * as React from "react";
import { Showcase } from ".";

export function ButtonShowcase() {
  return (
    <Showcase title="Button" description="A simple, focusable, button." pkg="@clutchd/button">
      <Button>Click me!</Button>
    </Showcase>
  );
}
