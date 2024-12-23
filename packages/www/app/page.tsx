import { Footer, Header, Main } from "@clutchd/layout";
import { Copyright } from "@clutchd/copyright";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Script async src="https://js.stripe.com/v3/pricing-table.js" />
      <Header className="p-5">
        <Link className="hidden sm:block" href="/">
          <Image
            width="194"
            height="50"
            priority
            src="/clutchd-logo.png"
            alt="Clutchd, LLC Logo"
          />
        </Link>
        <Link className="block sm:hidden" href="/">
          <Image
            width="50"
            height="50"
            priority
            src="/clutchd-icon.png"
            alt="Clutchd, LLC Logo"
          />
        </Link>
        <Link
          className="bg-brand-500 focus:bg-accent-500 hover:bg-accent-500 active:bg-accent-500 flex items-center rounded-xl px-4 text-white no-underline transition-all"
          href="https://billing.stripe.com/p/login/7sI4gE2Bm7NKaR26oo"
        >
          Manage Subscription
        </Link>
      </Header>
      <Main className="flex-1 p-5">
        <h1 className="pb-16 pt-4 text-center text-3xl">
          Professional design, development, and maintenance for all your web
          needs
        </h1>
        {/* @ts-ignore */}
        <stripe-pricing-table
          pricing-table-id="prctbl_1LjYcKExxz9r9gq2uHTtzabE"
          publishable-key="pk_live_51KnXiKExxz9r9gq2q29FmChNykUYPIuokFLvpumZDlw15GB7GNaJpuB45iMQIbthpTm4O3AjjCfBhfmRhZeG8wfP00YCb9j0rC"
        />
      </Main >
      <Footer className="p-5">
        <span className="text-gray-500">
          <Copyright>Clutchd, LLC</Copyright>
        </span>
        <Link
          className="text-right underline underline-offset-4"
          href="mailto:william@clutchd.com"
        >
          Contact Us
        </Link>
      </Footer>
    </>
  );
}
