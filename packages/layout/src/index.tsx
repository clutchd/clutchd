import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";
import { Page } from "./page";
import { Section } from "./section";

type ILayout = {
  Content: typeof Content;
  Footer: typeof Footer;
  Header: typeof Header;
  Page: typeof Page;
  Section: typeof Section;
};

const Layout: ILayout = {
  Content: Content,
  Footer: Footer,
  Header: Header,
  Page: Page,
  Section: Section,
};

export { Layout };
