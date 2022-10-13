import { Container, IContainer, IContainerProps } from "./container";
import { Content, IContent, IContentProps } from "./content";
import { Footer, IFooter, IFooterProps } from "./footer";
import { Header, IHeader, IHeaderProps } from "./header";
import { IPage, IPageProps, Page } from "./page";

/**
 * Type to define `Layout` component
 */
type ILayout = {
  Container: IContainer;
  Content: IContent;
  Footer: IFooter;
  Header: IHeader;
  Page: IPage;
};

/**
 * Type to define `Layout` props
 */
interface ILayoutProps {
  IContainerProps: IContainerProps;
  IContentProps: IContentProps;
  IFooterProps: IFooterProps;
  IHeaderProps: IHeaderProps;
  IPageProps: IPageProps;
}

/**
 * `Layout` - A component used to quickly setup various layouts and containers
 */
const Layout: ILayout = {
  Container: Container,
  Content: Content,
  Footer: Footer,
  Header: Header,
  Page: Page,
};

export { Layout };
export type { ILayout, ILayoutProps };
