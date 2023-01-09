import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { Base } from "./base";

/**
 * Type to define `Bold` component
 */
type IBold = typeof Bold;

/**
 * Type to define `Bold` props
 */
interface IBoldProps extends IComponentPropsWithoutRef<typeof Component.span> {
  protect?: boolean;
}

/**
 * `Bold` - A inline text component used to bold the provided text, intended to be used within the `Text` component
 * @param props `IBoldProps` used to render this `Bold`
 * @returns `Bold` component
 */
function Bold(props: IBoldProps) {
  return <Base fontWeight="font-bold" tag="span" {...props} />;
}

Bold.displayName = "TextBold";

export { Bold };
export type { IBold, IBoldProps };
