import { Slot } from "@clutchd/slot";
import * as React from "react";

// TODO: should twx be optionally bundled like this? should we not make tailwind assumption?
/**
 * Import `@clutchd/twx` if it exists, otherwise no processing classNames.
 */
let tx: (args: unknown) => string;
try {
  tx = require("@clutchd/twx").twx;
} catch (e) {}

// TODO: make this list leaner?
/**
 * Supported `Component` nodes.
 */
const NODES = [
  "a",
  "blockquote",
  "button",
  "div",
  "em",
  "fieldset",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "img",
  "input",
  "label",
  "main",
  "small",
  "strong",
  "optgroup",
  "option",
  "output",
  "p",
  "select",
  "span",
  "textarea",
] as const;

/**
 * Type to define generic `Component` props.
 */
type IComponentProps = {
  asChild?: boolean;
  twx?: (args: unknown) => string;
};

/**
 * Type to define the supported `Component` nodes.
 */
type Components = { [E in (typeof NODES)[number]]: IForwardRefComponent<E> };

/**
 * Type to define `Component` props with the 'ref' prop.
 */
type ComponentPropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & IComponentProps;

/**
 * Type to define `Component` as a forwarded ref component.
 */
interface IForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<ComponentPropsWithRef<E>> {}

/**
 * `Component` - a higher-order component that extends standard html tags.
 */
const Component = NODES.reduce((tag, node) => {
  const Node = React.forwardRef(
    (
      { asChild, twx = tx, ...props }: ComponentPropsWithRef<typeof node>,
      forwardedRef: React.Ref<unknown>,
    ) => {
      if (twx && props?.className) props.className = twx(props.className);
      const Comp: React.ElementType = asChild ? Slot : node;
      return <Comp ref={forwardedRef} {...props} />;
    },
  );

  Node.displayName = `Component.${node}`;

  Object.assign(tag, { [node]: Node });
  return tag;
}, {} as Components);

export { Component };
export type { ComponentPropsWithRef };
