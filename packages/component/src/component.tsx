import * as React from "react";

/**
 * Supported components
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
 * Props without the 'ref' prop
 */
type PropsWithoutRef<P> = P extends any
  ? "ref" extends keyof P
    ? Pick<P, Exclude<keyof P, "ref">>
    : P
  : P;

/**
 * ComponentProps without the 'ref' prop
 */
type ComponentPropsWithoutRef<T extends React.ElementType> = PropsWithoutRef<
  React.ComponentProps<T>
>;

/**
 * Component props with the 'ref' prop
 */
type ComponentPropsWithRef<E extends React.ElementType> =
  React.ComponentPropsWithRef<E> & {};

/**
 * Forwarded ref component with the 'ref' prop
 */
interface ForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<ComponentPropsWithRef<E>> {}

/**
 * Supported components
 */
type Components = { [E in typeof NODES[number]]: ForwardRefComponent<E> };

/**
 * A higher-order component that extends standard html tags
 */
const Component = NODES.reduce((component, node) => {
  const Node = React.forwardRef(
    (props: ComponentPropsWithRef<typeof node>, forwardedRef: any) => {
      const { ...componentProps } = props;
      const Comp: any = node;

      React.useEffect(() => {
        (window as any)[Symbol.for("clutchd")] = true;
      }, []);

      return <Comp {...componentProps} ref={forwardedRef} />;
    }
  );

  Node.displayName = `Component.${node}`;

  return { ...component, [node]: Node };
}, {} as Components);

export { Component };
export type { ComponentPropsWithoutRef, ComponentPropsWithRef };
