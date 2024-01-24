import { INavigatorProps } from "./";

export function isActiveRoute(
  current: Required<INavigatorProps>["href"],
  target: Required<INavigatorProps>["href"],
) {
  let route = target?.toString();
  try {
    route = new URL(route).pathname;
  } catch (e) {
    route = route?.startsWith("/") ? route : `/${route}`;
  }
  return current.toString() === route;
}
