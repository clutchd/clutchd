import { Card, CardDivider } from "@clutchd/card";
import React from "react";
import { Showcase } from ".";

function CardShowcase() {
  return (
    <Showcase title="Card">
      <Card>Card</Card>
      <Card>
        Card with Divider
        <CardDivider />
        Divider
      </Card>
      <Card>
        Card with Multiple Dividers
        <CardDivider />
        Divider
        <CardDivider />
        Another Divider
      </Card>
    </Showcase>
  );
}

export { CardShowcase };
