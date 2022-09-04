import { ProtectPage } from "./page";

type IProtect = {
  Page: typeof ProtectPage;
};

const Protect: IProtect = {
  Page: ProtectPage,
};

export { Protect };
