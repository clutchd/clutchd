import { Avatar } from "@clutchd/avatar";
import { Content, Footer, Header, Page } from "@clutchd/layout";
import { Bold, Caption, Heading, Italic, Subtitle, Text, Title } from "@clutchd/text";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
          <Avatar src="" />
          <Avatar src="https://avatars.githubusercontent.com/u/22361526?s=40&v=4" />
          <Heading>Heading</Heading>
          <Heading protect>Heading</Heading>
          <Title>Title</Title>
          <Subtitle>Subtitle</Subtitle>
          <Text>Text</Text>
          <Text>
            <Bold>Bold Text</Bold>
          </Text>
          <Text>
            <Italic>Italic Text</Italic>
          </Text>
          <Caption>Caption Text</Caption>
        </Content>
        <Footer>
          <div className="flex w-1/2">
            <Caption>
              © {new Date().getFullYear()} Clutchd, LLC
            </Caption>
          </div>
          <div className="flex flex-col w-1/2 text-right">
            <Caption>
              <Link href="mailto:william@clutchd.com">Contact Us</Link>
            </Caption>
          </div>
        </Footer>
      </Page>
    </>
  );
}
