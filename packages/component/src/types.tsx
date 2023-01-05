/**
 * Generic type to define a component any props
 */
interface IAnyProps extends Record<string, any> {}

/**
 * Generic type to define a component that has children
 */
interface IHasChildrenProps {
  children?: React.ReactNode;
}

export type { IAnyProps, IHasChildrenProps };
