import { Flex } from "@clutchd/flex";
import { Footer, Header, Main } from "@clutchd/layout";
import { Link } from "@clutchd/link";
import { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Clutchd, LLC",
};

export default function Home() {
  return (
    <>
      <Script async src="https://js.stripe.com/v3/pricing-table.js" />
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
          className="flex items-center px-4 ml-auto text-white no-underline transition-all rounded-xl bg-brand-500 focus:bg-accent-500 hover:bg-accent-500 active:bg-accent-500"
          href="https://billing.stripe.com/p/login/7sI4gE2Bm7NKaR26oo"
        >
          Manage Subscription
        </Link>
      </Header>
      <Main>
        <h1 className="pt-4 pb-16 text-3xl text-center">
          Professional design, development, and maintenance for all your web
          needs
        </h1>
        {/* @ts-ignore */}
        <stripe-pricing-table
          pricing-table-id="prctbl_1LjYcKExxz9r9gq2uHTtzabE"
          publishable-key="pk_live_51KnXiKExxz9r9gq2q29FmChNykUYPIuokFLvpumZDlw15GB7GNaJpuB45iMQIbthpTm4O3AjjCfBhfmRhZeG8wfP00YCb9j0rC"
        />
      </Main>
      <Footer>
        <Flex className="text-gray-500">© 2023 Clutchd, LLC</Flex>
        <Flex className="text-right">
          <Link
            className="underline underline-offset-4"
            href="mailto:william@clutchd.com"
          >
            Contact Us
          </Link>
        </Flex>
      </Footer>
    </>
  );
}
