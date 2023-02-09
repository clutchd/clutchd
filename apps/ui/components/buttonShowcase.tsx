import { Button } from "@clutchd/button";
import { Card } from "@clutchd/card";
import * as React from "react";
import { Showcase } from ".";

function ButtonShowcase({ color }) {
  return (
    <Showcase title="Button">
      <Card className="mb-6">
        <Button className="block mb-6">Click me!</Button>
        <Button href="#">Click me!</Button>
      </Card>
    </Showcase>
  );
}

export { ButtonShowcase };
