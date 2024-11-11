"use client";

import { Label } from "@clutchd/label";
import { Showcase } from "~/components";

function LabelShowcase() {
  return (
    <Showcase
      title="Label"
      description="A simple, non-focusable, label intended to be used for input forms."
      pkg="@clutchd/label"
      pkgType="primitive"
      stable
      rsc={false}
    >
      <Label>The label element. Non-focusable, and unstoppable.</Label>
    </Showcase>
  );
}

export { LabelShowcase };
