import { Avatar } from "@clutchd/avatar";
import { Card, CardFooter } from "@clutchd/card";
import { Copyright } from "@clutchd/copyright";
import { Divider } from "@clutchd/divider";
import { FlexCol } from "@clutchd/flex";
import { Content, Footer, Header, Page } from "@clutchd/layout";
import { Link } from "@clutchd/link";
import {
  Bold,
  Caption,
  Heading,
  Italic,
  Subtitle,
  Text,
  Title,
} from "@clutchd/text";
import Head from "next/head";
import Image from "next/image";
import { Showcase } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clutchd, LLC</title>
      </Head>
      <Page>
        <Header>
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
        </Header>
        <Content>
          <Heading>Components</Heading>
          <Divider />
          <Showcase title="Avatar">
            <Avatar src="" />
            <Avatar src="https://avatars.githubusercontent.com/u/22361526" />
          </Showcase>
          <Divider />
          <Showcase title="Card">
            <Card>
              <Text>Card</Text>
            </Card>
            <Card>
              <Text>Card with Footer</Text>
              <CardFooter>CardFooter</CardFooter>
            </Card>
            <Card>
              <Text>Card with Multiple Footers</Text>
              <CardFooter>CardFooter</CardFooter>
              <CardFooter>Another CardFooter</CardFooter>
            </Card>
          </Showcase>
          <Divider />
          <Showcase title="Text">
            <Heading>The quick brown fox jumps over the lazy dog</Heading>
            <Title>The quick brown fox jumps over the lazy dog</Title>
            <Subtitle>The quick brown fox jumps over the lazy dog</Subtitle>
            <Text>The quick brown fox jumps over the lazy dog</Text>
            <Text>
              <Bold>The quick brown fox jumps over the lazy dog</Bold>
            </Text>
            <Text>
              <Italic>The quick brown fox jumps over the lazy dog</Italic>
            </Text>
            <Caption>The quick brown fox jumps over the lazy dog</Caption>
          </Showcase>
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
