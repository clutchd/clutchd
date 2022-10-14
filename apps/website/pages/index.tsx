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
        <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
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
            <Link href="https://billing.stripe.com/p/login/7sI4gE2Bm7NKaR26oo">
              <button className="block px-4 ml-auto font-medium text-white transition-all duration-200 rounded-xl bg-brand-500 focus:bg-accent-500 hover:bg-accent-500 active:bg-accent-500">
                Manage Subscription
              </button>
            </Link>
          </nav>
        </Layout.Header>
        <Layout.Content>
          <h1 className="pt-4 pb-16 text-3xl text-center">
            Professional design, development, and maintenance for all your web
            needs
          </h1>
          <stripe-pricing-table
            pricing-table-id="prctbl_1LjYcKExxz9r9gq2uHTtzabE"
            publishable-key="pk_live_51KnXiKExxz9r9gq2q29FmChNykUYPIuokFLvpumZDlw15GB7GNaJpuB45iMQIbthpTm4O3AjjCfBhfmRhZeG8wfP00YCb9j0rC"
          ></stripe-pricing-table>
        </Layout.Content>
        <Layout.Footer row col={false}>
          <div className="flex w-1/2">
            <Text.Caption>© {new Date().getFullYear()} Clutchd, LLC</Text.Caption>
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
