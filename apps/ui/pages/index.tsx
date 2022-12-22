import { Avatar } from "@clutchd/avatar";
import { Content, Footer, Header, Page } from "@clutchd/layout";
import { Text } from "@clutchd/text";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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
          <Text.Heading>Heading</Text.Heading>
          <Text.Title>Title</Text.Title>
          <Text.Subtitle>Subtitle</Text.Subtitle>
          <Text.Text>Text</Text.Text>
          <Text.Text>
            <Text.Bold>Bold Text</Text.Bold>
          </Text.Text>
          <Text.Text>
            <Text.Italic>Italic Text</Text.Italic>
          </Text.Text>
          <Text.Caption>Caption Text</Text.Caption>
        </Content>
        <Footer>
          <div className="flex w-1/2">
            <Text.Caption>
              © {new Date().getFullYear()} Clutchd, LLC
            </Text.Caption>
          </div>
          <div className="flex flex-col w-1/2 text-right">
            <Text.Caption>
              <Link href="mailto:william@clutchd.com">Contact Us</Link>
            </Text.Caption>
          </div>
        </Footer>
      </Page>
    </>
  );
}
