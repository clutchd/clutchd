import { Copyright } from "@clutchd/copyright";
import { FlexCol } from "@clutchd/flex";
import { Content, Footer, Header, Page } from "@clutchd/layout";
import { Link } from "@clutchd/link";
import { Caption, Heading } from "@clutchd/text";
import Head from "next/head";
import Image from "next/image";
import {
  AvatarShowcase,
  CardShowcase,
  InputShowcase,
  TextShowcase,
  ThemeSwitch,
} from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clutchd, LLC</title>
      </Head>
      <Page>
        <Header>
          {/* <nav className="flex flex-row w-full">
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
          </nav> */}
          <ThemeSwitch />
        </Header>
        <Content>
          <Heading>Components</Heading>
          <AvatarShowcase />
          <CardShowcase />
          <InputShowcase />
          <TextShowcase />
        </Content>
        <Footer>
          <FlexCol>
            <Copyright>Clutchd, LLC</Copyright>
          </FlexCol>
          <FlexCol className="text-right">
            <Caption>
              <Link href="mailto:william@clutchd.com">Contact Us</Link>
            </Caption>
          </FlexCol>
        </Footer>
      </Page>
    </>
  );
}
