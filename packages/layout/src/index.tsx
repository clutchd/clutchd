import { Component, ComponentPropsWithoutRef } from "@clutchd/component";
import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";
import { Layout as Section } from "./layout";

interface ILayout extends ComponentPropsWithoutRef<typeof Component.section> {
  Content: typeof Content;
  Footer: typeof Footer;
  Header: typeof Header;
}

const Layout = Section as unknown as ILayout;

Layout.Content = Content;
Layout.Footer = Footer;
Layout.Header = Header;

export { Layout };
