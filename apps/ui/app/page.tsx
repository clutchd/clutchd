import { Copyright } from "@clutchd/copyright";
import { Divider } from "@clutchd/divider";
import { Footer, Main } from "@clutchd/layout";
import { Link } from "@clutchd/link";
import { Metadata } from "next";
import {
  AvatarShowcase,
  ButtonShowcase,
  CopyrightShowcase,
  LabelShowcase,
  Section,
  Showcase,
  TailwindIndicator,
} from "../components";

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
      <Main>
        <Section title="Core">
          {/* // TODO: Add proper showcase */}
          <Showcase
            title="Component"
            description="A primitive component intended to be used as a foundation for all other ui components."
            pkg="@clutchd/component"
            pkgType="core"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase */}
          <Showcase
            title="Compose Event Handlers"
            description="A small package that provides multiple event-handler utility functions."
            pkg="@clutchd/compose-event-handlers"
            pkgType="core"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase */}
          <Showcase
            title="Compose Props"
            description="A small utility intended to merge and compose a single props object from the provided prop objects."
            pkg="@clutchd/compose-props"
            pkgType="core"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase */}
          <Showcase
            title="Compose Refs"
            description="A small utility intended to compose multiple refs into a single ref."
            pkg="@clutchd/compose-refs"
            pkgType="core"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase */}
          <Showcase
            title="Slot"
            description="A utility component that merges it's props onto it's child."
            pkg="@clutchd/slot"
            pkgType="core"
            stable
            rsc
          />
        </Section>
        <Section title="Layout">
          {/* // TODO: Add proper showcase */}
          <Showcase
            title="Block"
            description="A fundamental layout building block."
            pkg="@clutchd/block"
            pkgType="layout"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase */}
          <Showcase
            title="Flex"
            description="A flex container that powers various layouts."
            pkg="@clutchd/flex"
            pkgType="layout"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase */}
          <Showcase
            title="Grid"
            description="A grid container that powers various layouts."
            pkg="@clutchd/grid"
            pkgType="layout"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase */}
          <Showcase
            title="Layout"
            description="A group of layout components for quickly build a web page's foundation."
            pkg="@clutchd/layout"
            pkgType="layout"
            stable
            rsc
          />
        </Section>
        <Section title="Primitives">
          <Showcase
            title="Copyright"
            description="A small utility primitive to assist with returning the current copyright year."
            pkg="@clutchd/copyright"
            pkgType="primitive"
            stable
            rsc
          >
            <CopyrightShowcase />
          </Showcase>
          {/* // TODO: Add proper showcase */}
          <Showcase
            title="Divider"
            description="A visual divider to separate content."
            pkg="@clutchd/divider"
            pkgType="primitive"
            stable
            rsc
          />
          {/* // TODO: Add proper showcase */}
          <Showcase
            title="Image"
            description="A simple next/image based component with data states."
            pkg="@clutchd/image"
            pkgType="primitive"
            stable
            rsc={false}
          />
          <Showcase
            title="Label"
            description="A simple, non-focusable, label intended to be used for input forms."
            pkg="@clutchd/label"
            pkgType="primitive"
            stable
            rsc={false}
          >
            <LabelShowcase />
          </Showcase>
        </Section>
        <Section title="Components">
          <Divider className="bg-gray-950" />
          <Showcase
            title="Avatar"
            description="A basic avatar component powered by next/image."
            pkg="@clutchd/avatar"
            pkgType="ui"
            stable
            rsc={false}
          >
            <AvatarShowcase />
          </Showcase>
          {/* <Showcase
            title="Button"
            description="A simple, focusable, button."
            pkg="@clutchd/button"
            pkgType="ui"
            stable
          >
            <ButtonShowcase />
          </Showcase> */}
        </Section>
        {/* <TextShowcase /> */}
        {/* 
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
      </Main>
      <Footer>
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
