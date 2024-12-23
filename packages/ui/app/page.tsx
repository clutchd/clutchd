import { Copyright } from "@clutchd/copyright";
import { Footer } from "@clutchd/layout";
import Link from "next/link";
import { AvatarShowcase } from "~/components/avatarShowcase";
import { CopyrightShowcase } from "~/components/copyrightShowcase";
import { LayoutShowcase } from "~/components/layoutShowcase";
import { Section } from "~/components/section";

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
      <main className="p-5">
        <Section title="Core">
          {/* TODO: Add component showcase */}
          {/* TODO: Add compose-event-handlers showcase */}
          {/* TODO: Add compose-props showcase */}
          {/* TODO: Add get-initials showcase */}
          {/* TODO: Add is-empty showcase */}
          {/* TODO: Add twx showcase */}
          <LayoutShowcase />
        </Section>
        <Section title="Primitives">
          <CopyrightShowcase />
          {/* TODO: Add image showcase */}
          {/* TODO: Add navigator showcase */}
        </Section>
        <Section title="Components">
          <AvatarShowcase />
        </Section>
      </main>



      <Footer className="p-5">
        <span className="text-gray-500"><Copyright>Clutchd, LLC</Copyright></span>
        <Link className="text-right underline underline-offset-4" href="mailto:william@clutchd.com">Contact Us</Link>
      </Footer>
    </>
  );
}
