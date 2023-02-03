import { Block } from "@clutchd/block";
import { Card, CardDivider } from "@clutchd/card";
import { P } from "@clutchd/text";
import React from "react";
import { Showcase } from ".";

function CardShowcase({ color }) {
  return (
    <Showcase title="Card">
      <Card theme={color}>
        <Block>
          <P>Card</P>
        </Block>
      </Card>
      <Card theme={color}>
        <Block>
          <P>Card with Divider</P>
        </Block>
        <CardDivider theme={color} />
        <Block>
          <P>Divider</P>
        </Block>
      </Card>
      <Card theme={color}>
        <P>Card with Multiple Dividers</P>
        <CardDivider theme={color} />
        <P>Divider</P>
        <CardDivider theme={color} />
        <P>Another Divider</P>
      </Card>
    </Showcase>
  );
}

export { CardShowcase };
