import { Container } from "./container";
import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";
import { Page } from "./page";

type ILayout = {
  Container: typeof Container;
  Content: typeof Content;
  Footer: typeof Footer;
  Header: typeof Header;
  Page: typeof Page;
};

const Layout: ILayout = {
  Container: Container,
  Content: Content,
  Footer: Footer,
  Header: Header,
  Page: Page,
};

export { Layout };
