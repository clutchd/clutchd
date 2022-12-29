import { clsx } from "@clutchd/clsx";
import { IComponent, IComponentProps } from "@clutchd/component";
import { Skeleton } from "@clutchd/skeleton";
import {
  IFontSize,
  IWithFontSize,
  IWithFontWeight,
  IWithLineHeight,
} from "@clutchd/tailwind";

/**
 * Type to define `Base` component
 */
type IBase = typeof Base;

/**
 * Type to define `Base` props
 */
interface IBaseProps
  extends IComponentProps<IComponent["p"]>,
    IWithFontSize,
    IWithLineHeight,
    IWithFontWeight {
  protect?: boolean;
  tag?: string;
}

/**
 * `Base` - The base text component that is responsible for rendering all text components
 * @param props `IBaseProps` used to render this `Base`
 * @returns `Base` component
 */
function Base({ children, protect = false, tag = "p", ...props }: IBaseProps) {
  // dynamically determine underlying text component
  const InternalText = tag as keyof IComponent;

  // get class names
  const className = clsx(
    props.fontSize,
    props.fontWeight,
    props.lineHeight,
    "transition-all",
    props.className
  );

  // if protected, return skeleton
  if (protect) {
    return (
      <div className={clsx(getWrapper(className), "flex items-center")}>
        <Skeleton
          className={clsx(
            getComponent(className),
            "min-w-[144px]",
            "animate-pulse"
          )}
        />
      </div>
    );
  }

  // otherwise, return component
  return <InternalText className={className}>{children}</InternalText>;
}

/**
 * Type to define a `TextClassMap` object
 */
type ITextClassMap = {
  [key in IFontSize]: string;
};

/**
 * Helper function to retrieve the proper classes for a text skeleton
 * @param className className being used to generate skeleton classes
 * @param map `ITextClassMap` object containing input class -> output class
 * @returns skeleton class
 */
function getClass(className: string, map: ITextClassMap): string {
  const classes: string[] = className.split(" ");

  function isKey(key: string): key is keyof ITextClassMap {
    return key in map;
  }

  for (let i = 0; i < classes.length; i++) {
    if (isKey(classes[i])) {
      return map[classes[i] as keyof ITextClassMap];
    }
  }

  return map["text-base"];
}

/**
 * Gets the skeleton component's class based on the provided className
 * @param className className being used to generate skeleton classes
 * @returns component skeleton class
 */
function getComponent(className: string): string {
  const map: ITextClassMap = {
    "text-xs": "h-[12px]",
    "text-sm": "h-[14px]",
    "text-base": "h-[16px]",
    "text-lg": "h-[18px]",
    "text-xl": "h-[20px]",
    "text-2xl": "h-[24px]",
    "text-3xl": "h-[30px]",
    "text-4xl": "h-[36px]",
    "text-5xl": "h-[48px]",
    "text-6xl": "h-[60px]",
    "text-7xl": "h-[72px]",
    "text-8xl": "h-[96px]",
    "text-9xl": "h-[128px]",
  };

  return getClass(className, map);
}

/**
 * Gets the skeleton wrapper's class based on the provided className
 * @param className className being used to generate skeleton classes
 * @returns wrapper skeleton class
 */
function getWrapper(className: string): string {
  const map: ITextClassMap = {
    "text-xs": "h-[16px]",
    "text-sm": "h-[20px]",
    "text-base": "h-[24px]",
    "text-lg": "h-[28px]",
    "text-xl": "h-[28px]",
    "text-2xl": "h-[32px]",
    "text-3xl": "h-[36px]",
    "text-4xl": "h-[40px]",
    "text-5xl": "h-[48px]",
    "text-6xl": "h-[60px]",
    "text-7xl": "h-[72px]",
    "text-8xl": "h-[96px]",
    "text-9xl": "h-[128px]",
  };

  return getClass(className, map);
}

export { Base };
export type { IBase, IBaseProps };
