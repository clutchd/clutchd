import { Content } from "./content";
import { Footer } from "./footer";
import { Header } from "./header";
import { Layout as InternalLayout } from "./layout";
import { Page } from "./page";
// import Sider from './Sider';

type InternalLayoutType = typeof InternalLayout;

interface ILayout extends InternalLayoutType {
  Content: typeof Content;
  Footer: typeof Footer;
  Header: typeof Header;
  Page: typeof Page;
}

const Layout = InternalLayout as ILayout;

Layout.Content = Content;
Layout.Footer = Footer;
Layout.Header = Header;
// Layout.Sider = Sider;

export { Layout };
