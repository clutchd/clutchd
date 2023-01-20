import { Card, CardDivider } from "@clutchd/card";
import { Text } from "@clutchd/text";
import React from "react";
import { Showcase } from ".";

function CardShowcase() {
  return (
    <Showcase title="Card">
      <Card>
        <Text>Card</Text>
      </Card>
      <Card>
        <Text>Card with Divider</Text>
        <CardDivider />
        <Text>Divider</Text>
      </Card>
      <Card>
        <Text>Card with Multiple Footers</Text>
        <CardDivider />
        <Text>Divider</Text>
        <CardDivider />
        <Text>Another Divider</Text>
      </Card>
    </Showcase>
  );
}

export { CardShowcase };
