import * as React from "react";
import { AsChild } from "./asChild";

/**
 * Supported `BaseComponent` nodes
 */
const NODES = [
  "a",
  "button",
  "div",
  "footer",
  "header",
  "main",
  "p",
  "section",
  "span",
] as const;

/**
 * Generic type to define `any` without the 'ref' prop
 */
type PropsWithoutRef<P> = P extends any
  ? "ref" extends keyof P
    ? Pick<P, Exclude<keyof P, "ref">>
    : P
  : P;

/**
 * Generic type to define `React.ElementType` props without the 'ref' prop
 */
type ReactPropsWithoutRef<T extends React.ElementType> = PropsWithoutRef<
  React.ComponentProps<T>
>;

/**
 * Type to define `Component` props with the 'ref' prop
 */
type ComponentPropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {
    asChild?: boolean;
  };

/**
 * Type to define `Component` as a forwarded ref component with the 'ref' prop
 */
interface ForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<ComponentPropsWithRef<E>> {}

/**
 * Type to define the supported `Component` nodes
 */
type Components = { [E in typeof NODES[number]]: ForwardRefComponent<E> };

/**
 * `Component` - a higher-order component that extends standard html tags
 */
const Component = NODES.reduce((component, node) => {
  const Node = React.forwardRef(
    (props: ComponentPropsWithRef<typeof node>, forwardedRef: any) => {
      const { asChild, ...componentProps } = props;
      const Comp: any = asChild ? AsChild : node;

      React.useEffect(() => {
        (window as any)[Symbol.for("clutchd")] = true;
      }, []);

      return <Comp {...componentProps} ref={forwardedRef} />;
    }
  );

  Node.displayName = `BaseComponent.${node}`;

  return { ...component, [node]: Node };
}, {} as Components);

export { Component };
export type { ComponentPropsWithRef, ReactPropsWithoutRef };
