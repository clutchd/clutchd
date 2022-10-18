import { Layout } from "@clutchd/layout";
import Head from "next/head";
import Image from "next/image";
import { Text } from "@clutchd/text";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clutchd, LLC</title>
      </Head>
      <Layout.Page col>
        <Layout.Header>
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
        </Layout.Header>
        <Layout.Content>
          <Text.Heading>Heading</Text.Heading>
          <Text.Title>Text</Text.Title>
          <Text.Subtitle>Text</Text.Subtitle>
          <Text.Text>Text</Text.Text>
          <Text.Text>
            <Text.Bold>Text</Text.Bold>
          </Text.Text>
          <Text.Text>
            <Text.Italic>Text</Text.Italic>
          </Text.Text>
          <Text.Caption>Text</Text.Caption>
        </Layout.Content>
        <Layout.Footer row col={false}>
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
        </Layout.Footer>
      </Layout.Page>
    </>
  );
}
