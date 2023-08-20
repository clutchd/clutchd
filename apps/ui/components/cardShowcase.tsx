import { Card } from "@clutchd/card";
import { Divider } from "@clutchd/divider";

function CardShowcase() {
  return (
    <>
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
    </>
  );
}

export { CardShowcase };
