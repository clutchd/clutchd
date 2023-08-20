"use client";

import { Label } from "@clutchd/label";
import * as React from "react";
import { Showcase } from ".";

function LabelShowcase() {
  return (
    <Showcase
      title="Label"
      description="A simple, non-focusable, label intended to be used for input forms."
    >
      <Label>Click me!</Label>
    </Showcase>
  );
}

export { LabelShowcase };
