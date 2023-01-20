import { Divider } from "@clutchd/divider";
import { FlexCol } from "@clutchd/flex";
import { Title } from "@clutchd/text";

function Showcase({ title, children }) {
  return (
    <>
      <Divider />
      <FlexCol spaceY="space-y-4">
        <Title>{title}</Title>
        {children}
      </FlexCol>
    </>
  );
}

export { Showcase };
