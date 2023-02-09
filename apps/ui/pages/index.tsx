import { Block } from "@clutchd/block";
import { Copyright } from "@clutchd/copyright";
import { Divider } from "@clutchd/divider";
import { FlexCol } from "@clutchd/flex";
import { Content, Footer, Header, Page } from "@clutchd/layout";
import { Link } from "@clutchd/link";
import { Subtle, H1 } from "@clutchd/text";
import Head from "next/head";
import Image from "next/image";
import * as React from "react";
import {
  AvatarShowcase,
  ButtonShowcase,
  CardShowcase,
  ColorSwitch,
  InputShowcase,
  TailwindIndicator,
  TextShowcase,
  ThemeSwitch,
} from "../components";

export default function Home() {
  const [color, setColor] = React.useState("gray");

  return (
    <>
      <Head>
        <title>Clutchd, LLC</title>
      </Head>
      <Page>
        <Header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900">
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
          <TailwindIndicator />
        </Header>
        <Content>
          <Block>
            <H1>Components</H1>
            <Divider />
            <TextShowcase color={color} />
            <AvatarShowcase color={color} />
            <ButtonShowcase color={color} />
            <CardShowcase color={color} />
            <InputShowcase color={color} />
          </Block>
        </Content>
        <Footer>
          <FlexCol>
            <Copyright>Clutchd, LLC</Copyright>
          </FlexCol>
          <FlexCol className="text-right">
            <Subtle>
              <Link href="mailto:william@clutchd.com">Contact Us</Link>
            </Subtle>
          </FlexCol>
        </Footer>
      </Page>
    </>
  );
}
