import { Footer, Header, Main, Page } from "@clutchd/layout";
import { twx } from "@clutchd/twx";
import React from "react";
import { DecorativeBlock, DecorativeLabel } from "~/components/decorative";
import { Showcase } from "~/components/showcase";

function LayoutShowcase() {
  return (
    <Showcase
      title="Layout"
      description="A group of layout components for quickly build a web page's foundation."
      pkg="@clutchd/layout"
      pkgType="layout"
      stable
      rsc
    >
      <Page
        cx={twx}
        className="min-w-0 min-h-0 relative bg-gray-100 border border-gray-400 gap-4 rounded-md bg-[url('/diagonal.svg')] bg-repeat px-4 pb-4 pt-8"
      >
        <DecorativeLabel className="absolute -left-[1px] -top-[1px]">
          Page
        </DecorativeLabel>
        <Header asChild>
          <DecorativeBlock label="Header" />
        </Header>
        <Main asChild>
          <DecorativeBlock label="Main" />
        </Main>
        <Footer asChild>
          <DecorativeBlock label="Footer" />
        </Footer>
      </Page>
    </Showcase>
  );
}

export { LayoutShowcase };
