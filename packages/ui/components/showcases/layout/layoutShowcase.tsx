import { Footer, Header, Main, Page } from "@clutchd/layout";
import { DecorativeBlock, DecorativeLabel, Showcase } from "~/components";

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
        minHeight="min-h-0"
        minWidth="min-w-0"
        className="relative gap-4 rounded-md border border-gray-200 bg-gray-50 bg-[url('/diagonal.svg')] bg-repeat px-4 pb-4 pt-8"
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
