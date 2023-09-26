import { Button, danger, ghost, link } from "@clutchd/button";

export function ButtonShowcase() {
  return (
    <>
      <Button>Default / Outline</Button>
      <br />
      <Button variant={danger}>Danger</Button>
      <br />
      <Button variant={ghost}>Ghost</Button>
      <br />
      <Button variant={link}>Link</Button>
      <br />
      <Button disabled>Disabled</Button>
      <br />
      <Button variant="">Unstyled</Button>
    </>
  );
}
