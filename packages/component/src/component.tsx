import { composeClassNames as cn } from "@clutchd/compose-props";
import type { PrimitivePropsWithRef } from "@radix-ui/react-primitive";
import { Slot } from "@radix-ui/react-slot";
import * as React from "react";

/**
 * Supported `Component` nodes.
 */
const NODES = [
  "a",
  "button",
  "div",
  "footer",
  "form",
  "header",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "main",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul",
] as const;

/**
 * Type to define generic `Component` props.
 */
type IComponentProps = {
  cx?: ((...args: unknown[]) => string) | undefined;
};

/**
 * Type to define the supported `Component` nodes.
 */
type Components = {
  [E in (typeof NODES)[number]]: ComponentForwardRefComponent<E>;
};

/**
 * Type to define `Component` props with the 'ref' prop.
 */
type ComponentPropsWithRef<E extends React.ElementType> =
  PrimitivePropsWithRef<E> & IComponentProps;

/**
 * Type to define `Component` as a forwarded ref component.
 */
interface ComponentForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<ComponentPropsWithRef<E>> {}

/**
 * `Component` - a higher-order component that extends standard html tags.
 */
const Component = NODES.reduce((tag, node) => {
  const Node = React.forwardRef(
    (
      { asChild, cx = cn, ...props }: ComponentPropsWithRef<typeof node>,
      forwardedRef: React.Ref<unknown>,
    ) => {
      const className =
        props.className && cx ? cx(props.className) : props.className;
      const Comp = (asChild ? Slot : node) as React.ElementType;
      return <Comp ref={forwardedRef} {...props} className={className} />;
    },
  );

  Node.displayName = `Component.${node}`;
  Object.assign(tag, { [node]: Node });
  return tag;
}, {} as Components);

export { Component };
export type { ComponentPropsWithRef };
