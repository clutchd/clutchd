import { Component, IComponentPropsWithoutRef } from "@clutchd/component";
import { ITextPropsCommon, TextBase } from "./textBase";

/**
 * Type to define `Title` component
 */
type ITitle = typeof Title;

/**
 * Type to define `Title` props
 */
interface ITitleProps
  extends ITextPropsCommon,
    IComponentPropsWithoutRef<typeof Component.p> {}

/**
 * `Title` - A bolder text component to be used for titles
 * @param props `ITitleProps` used to render this `Title`
 * @returns `Title` component
 */
function Title({
  fontSize = "text-xl",
  fontWeight = "font-medium",
  ...props
}: ITitleProps) {
  return (
    <TextBase
      fontSize={fontSize}
      fontWeight={fontWeight}
      shade="700"
      {...props}
    />
  );
}

Title.displayName = "TextTitle";

export { Title };
export type { ITitle, ITitleProps };
