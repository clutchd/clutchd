import { Divider } from "@clutchd/divider";
import { Footer, Main } from "@clutchd/layout";
import { Link } from "@clutchd/link";
import { H1 } from "@clutchd/text";
import { Metadata } from "next";
import {
  ButtonShowcase,
  CardShowcase,
  LabelShowcase,
  TailwindIndicator,
} from "../components";

export const metadata: Metadata = {
  title: "Clutchd, LLC",
};

export default function Home() {
  return (
    <>
      {/* <Header className="sticky top-0 z-50 bg-white shadow-md">
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
      </Header> */}
      <Main>
        <H1>Components</H1>
        <Divider />
        {/* <TextShowcase /> */}
        {/* <AvatarShowcase />
        
       
        <InputShowcase /> */}
        <ButtonShowcase />
        <CardShowcase />
        <LabelShowcase />
      </Main>
      <Footer>
        <div className="text-gray-500">© 2023 Clutchd, LLC</div>
        <Link
          className="text-right underline underline-offset-4"
          href="mailto:william@clutchd.com"
        >
          Contact Us
        </Link>
      </Footer>
      <TailwindIndicator />
    </>
  );
}
