import { Copyright, getCopyright } from "@clutchd/copyright";
import { Flex } from "@clutchd/flex";
import { Showcase } from "~/components";

function CopyrightShowcase() {
  return (
    <Showcase
      title="Copyright"
      description="A small utility primitive to assist with returning the current copyright year."
      pkg="@clutchd/copyright"
      pkgType="primitive"
      stable
      rsc
    >
      <Flex direction="flex-col" className="gap-2">
        <Copyright />
        <Copyright>Copyright with text</Copyright>
        <p>{getCopyright()} Copyright with custom implementation</p>
      </Flex>
    </Showcase>
  );
}

export { CopyrightShowcase };
