import { Flex } from "@clutchd/flex";
import { DecorativeBlock, Showcase } from "~/components";

function FlexShowcase() {
  return (
    <Showcase
      title="Flex"
      description="A flex container that powers various layouts."
      pkg="@clutchd/flex"
      pkgType="layout"
      stable
      rsc
    >
      <Flex className="gap-4">
        <DecorativeBlock />
        <DecorativeBlock />
        <DecorativeBlock />
        <DecorativeBlock />
      </Flex>
    </Showcase>
  );
}

export { FlexShowcase };
