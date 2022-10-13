import { Base, IBase, IBaseProps } from "./base";
import { Bold, IBold, IBoldProps } from "./bold";
import { Caption, ICaption, ICaptionProps } from "./caption";
import { Heading, IHeading, IHeadingProps } from "./heading";
import { IItalic, IItalicProps, Italic } from "./italic";
import { ISubtitle, ISubtitleProps, Subtitle } from "./subtitle";
import {
  IText as ITextComponent,
  ITextProps as ITextComponentProps,
  Text as TextComponent,
} from "./text";
import { ITitle, ITitleProps, Title } from "./title";

/**
 * Type to define `Text` component
 */
type IText = {
  Base: IBase;
  Bold: IBold;
  Caption: ICaption;
  Heading: IHeading;
  Italic: IItalic;
  Subtitle: ISubtitle;
  Text: ITextComponent;
  Title: ITitle;
};

/**
 * Type to define `Text` props
 */
interface ITextProps {
  IBaseProps: IBaseProps;
  IBoldProps: IBoldProps;
  ICaptionProps: ICaptionProps;
  IHeadingProps: IHeadingProps;
  IItalicProps: IItalicProps;
  ISubtitleProps: ISubtitleProps;
  ITextProps: ITextComponentProps;
  ITitleProps: ITitleProps;
}

/**
 * `Text` - A component used to quickly render consistent text
 */
const Text: IText = {
  Base: Base,
  Bold: Bold,
  Caption: Caption,
  Heading: Heading,
  Italic: Italic,
  Subtitle: Subtitle,
  Text: TextComponent,
  Title: Title,
};

export { Text };
export type { IText, ITextProps };
