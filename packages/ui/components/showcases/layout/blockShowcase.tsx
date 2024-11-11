import { Block } from "@clutchd/block";
import { DecorativeBlock, Showcase } from "~/components";

function BlockShowcase() {
  return (
    <Showcase
      title="Block"
      description="A fundamental layout building block."
      pkg="@clutchd/block"
      pkgType="layout"
      stable
      rsc
    >
      <Block asChild>
        <DecorativeBlock />
      </Block>
    </Showcase>
  );
}

export { BlockShowcase };
