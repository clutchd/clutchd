import { ProtectComponent } from "./component";
import { ProtectPage } from "./page";

type IProtect = {
  Component: typeof ProtectComponent;
  Page: typeof ProtectPage;
};

const Protect: IProtect = {
  Component: ProtectComponent,
  Page: ProtectPage,
};

export { Protect };
