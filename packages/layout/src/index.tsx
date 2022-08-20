import { default as Content } from "./content";
import { default as Footer } from "./footer";
import { default as Header } from "./header";
import {
  default as InternalLayout,
  ILayout as IInternalLayout,
} from "./layout";

interface ILayout extends React.FC<IInternalLayout> {
  Content: typeof Content;
  Footer: typeof Footer;
  Header: typeof Header;
}

const Layout = InternalLayout as ILayout;

Layout.Content = Content;
Layout.Footer = Footer;
Layout.Header = Header;

export { Layout };
