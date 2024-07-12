import { Copyright } from "@clutchd/copyright";
import { Footer } from "@clutchd/layout";
import { Link } from "@clutchd/link";
import { Metadata } from "next";
import {
  AvatarShowcase,
  BlockShowcase,
  CopyrightShowcase,
  FlexShowcase,
  GridShowcase,
  LabelShowcase,
  LayoutShowcase,
  Section,
  TailwindIndicator,
} from "~/components";

export const metadata: Metadata = {
  title: "Clutchd, LLC",
};

export default function Home() {
  return (
    <>
      {/* <Header className="sticky top-0 z-50 bg-white shadow-md">
        <nav className="flex flex-row w-full">
          <div className="hidden sm:block">
            <Link className="mr-auto" href="/">
              <Image
                width="200"
                height="50"
                src="/clutchd-logo.png"
                alt="Clutchd, LLC Logo"
              />
            </Link>
          </div>
          <div className="block sm:hidden">
            <Link href="/">
              <Image
                width="50"
                height="50"
                src="/clutchd-icon.png"
                alt="Clutchd, LLC Logo"
              />
            </Link>
          </div>
        </nav>
        <ThemeSwitch />
        <ColorSwitch color={color} setColor={setColor} /> 
      </Header> */}
      <main className="p-5">
        {/* <Section title="Core">
          {/* // TODO: Add proper showcase
          <Showcase
            title="Component"
            description="A primitive component intended to be used as a foundation for all other ui components."
            pkg="@clutchd/component"
            pkgType="core"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase
          <Showcase
            title="Compose Event Handlers"
            description="A small package that provides multiple event-handler utility functions."
            pkg="@clutchd/compose-event-handlers"
            pkgType="core"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase
          <Showcase
            title="Compose Props"
            description="A small utility intended to merge and compose a single props object from the provided prop objects."
            pkg="@clutchd/compose-props"
            pkgType="core"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase
          <Showcase
            title="Compose Refs"
            description="A small utility intended to compose multiple refs into a single ref."
            pkg="@clutchd/compose-refs"
            pkgType="core"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase
          <Showcase
            title="Slot"
            description="A utility component that merges it's props onto it's child."
            pkg="@clutchd/slot"
            pkgType="core"
            stable
            rsc
          />
      </Section>*/}
        <Section title="Layout">
          <BlockShowcase />
          <FlexShowcase />
          <GridShowcase />
          <LayoutShowcase />
        </Section>

        <Section title="Primitives">
          <CopyrightShowcase />
          <LabelShowcase />
          {/* 
          {/* // TODO: Add proper showcase
          <Showcase
            title="Divider"
            description="A visual divider to separate content."
            pkg="@clutchd/divider"
            pkgType="primitive"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase
          <Showcase
            title="Image"
            description="A simple next/image based component with data states."
            pkg="@clutchd/image"
            pkgType="primitive"
            stable
            rsc={false}
          />
          */}
        </Section>
        <Section title="Components">
          <AvatarShowcase />
          {/* // TODO: Add proper showcase
          <Showcase
            title="Button"
            description="A simple, focusable, button."
            pkg="@clutchd/button"
            pkgType="ui"
            stable
          >
            <ButtonShowcase />
          </Showcase> */}
        </Section>
        {/* <TextShowcase />
       
        <Showcase title="Card" pkg="@clutchd/card">
          <CardShowcase />
        </Showcase>
        <Showcase title="Form" pkg="@clutchd/form" rsc={false}>
          <FormShowcase />
        </Showcase>
        <Showcase
          title="Input"
          description={
            "A primitive input component that powers all types of inputs."
          }
          pkg="@clutchd/input"
          rsc={false}
        >
          <InputShowcase />
        </Showcase> */}
      </main>
      <Footer className="p-5">
        <Copyright className="text-gray-500">Clutchd, LLC</Copyright>
        <Link
          className="text-right underline underline-offset-4"
          href="mailto:william@clutchd.com"
        >
          Contact Us
        </Link>
      </Footer>
      <TailwindIndicator />
    </>
  );
}
