import { Card } from "@clutchd/card";
import { Divider } from "@clutchd/divider";
import React from "react";
import { Showcase } from ".";

function CardShowcase() {
  return (
    <Showcase title="Card" pkg="@clutchd/card">
      <Card>Card</Card>
      <Card>
        Card with Divider
        <Divider />
        Divider
      </Card>
      <Card>
        Card with Multiple Dividers
        <Divider />
        Divider
        <Divider />
        Another Divider
      </Card>
    </Showcase>
  );
}

export { CardShowcase };
