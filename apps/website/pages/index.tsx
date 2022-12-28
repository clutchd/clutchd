import { Content, Footer, Header, Page } from "@clutchd/layout";
import { Link } from "@clutchd/link";
import { Caption, Text } from "@clutchd/text";
import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clutchd, LLC</title>
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      </Head>
      <Page>
        <Header>
          <Link className="hidden mr-auto sm:block" href="/">
            <Image
              width="200"
              height="50"
              src="/clutchd-logo.png"
              alt="Clutchd, LLC Logo"
            />
          </Link>
          <Link className="block sm:hidden" href="/">
            <Image
              width="50"
              height="50"
              src="/clutchd-icon.png"
              alt="Clutchd, LLC Logo"
            />
          </Link>
          <Link
            className="flex px-4 ml-auto transition-all duration-200 rounded-xl bg-brand-500 focus:bg-accent-500 hover:bg-accent-500 active:bg-accent-500"
            href="https://billing.stripe.com/p/login/7sI4gE2Bm7NKaR26oo"
          >
            <Text
              fontWeight="font-semibold"
              theme="white"
              className="self-center"
            >
              Manage Subscription
            </Text>
          </Link>
        </Header>
        <Content>
          <h1 className="pt-4 pb-16 text-3xl text-center">
            Professional design, development, and maintenance for all your web
            needs
          </h1>
          {/* @ts-ignore */}
          <stripe-pricing-table
            pricing-table-id="prctbl_1LjYcKExxz9r9gq2uHTtzabE"
            publishable-key="pk_live_51KnXiKExxz9r9gq2q29FmChNykUYPIuokFLvpumZDlw15GB7GNaJpuB45iMQIbthpTm4O3AjjCfBhfmRhZeG8wfP00YCb9j0rC"
          />
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
