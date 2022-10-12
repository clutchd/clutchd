import {
  IProtectComponent,
  IProtectComponentProps,
  ProtectComponent,
} from "./component";
import { IProtectPage, IProtectPageProps, ProtectPage } from "./page";

/**
 * Type to define `Protect` component
 */
type IProtect = {
  Component: IProtectComponent;
  Page: IProtectPage;
};

/**
 * Type to define `Protect` props
 */
interface IProtectProps {
  IProtectComponentProps: IProtectComponentProps;
  IProtectPageProps: IProtectPageProps;
}

/**
 * `Protect` - A component used to protect components and pages from displaying sensitive data to an unauthenticated user
 */
const Protect: IProtect = {
  Component: ProtectComponent,
  Page: ProtectPage,
};

export { Protect };
export type { IProtect, IProtectProps };
