import {
  ColorAccent,
  ColorVariants,
  ColorWithAccent,
  PaletteColor,
  StaticColor,
  WithModifier,
} from "..";

/**
 * Color Map - Preset map to define available colors for a given variant
 * @see https://tailwindcss.com/docs/customizing-colors
 */

type ColorWithSpecificAccent<Accent extends ColorAccent> =
  `${PaletteColor}-${Accent}`;

type ColorFromColorWithAccent<T extends ColorWithAccent> =
  T extends `${infer PaletteColor}-${ColorAccent}` ? PaletteColor : never;

type ColorMapValue<
  Variant extends ColorVariants,
  Color extends StaticColor | ColorWithAccent
> = Color extends StaticColor
  ? StaticColorMapValue<Variant, Color>
  : Color extends ColorWithAccent
  ? ColorWithAccentMapValue<Variant, Color>
  : never;

type StaticColorMapValue<
  Variant extends ColorVariants,
  Color extends StaticColor
> = `${Variant}-${Color}${Color extends "white"
  ? ` dark:${Variant}-gray-900`
  : Color extends "black"
  ? ` dark:${Variant}-gray-50`
  : ""}`;

type DarkColorMapValue<
  Variant extends ColorVariants,
  Color extends ColorWithAccent,
  Accent extends ColorAccent
> = ` ${WithModifier<
  "dark",
  `${Variant}-${ColorFromColorWithAccent<Color>}`
>}-${Accent}`;

type ColorWithAccentMapValue<
  Variant extends ColorVariants,
  Color extends ColorWithAccent
> = `${Variant}-${Color}${Color extends ColorWithSpecificAccent<"50">
  ? DarkColorMapValue<Variant, Color, "900">
  : Color extends ColorWithSpecificAccent<"100">
  ? DarkColorMapValue<Variant, Color, "800">
  : Color extends ColorWithSpecificAccent<"200">
  ? DarkColorMapValue<Variant, Color, "700">
  : Color extends ColorWithSpecificAccent<"300">
  ? DarkColorMapValue<Variant, Color, "600">
  : Color extends ColorWithSpecificAccent<"400">
  ? DarkColorMapValue<Variant, Color, "500">
  : Color extends ColorWithSpecificAccent<"500">
  ? DarkColorMapValue<Variant, Color, "400">
  : Color extends ColorWithSpecificAccent<"600">
  ? DarkColorMapValue<Variant, Color, "300">
  : Color extends ColorWithSpecificAccent<"700">
  ? DarkColorMapValue<Variant, Color, "200">
  : Color extends ColorWithSpecificAccent<"800">
  ? DarkColorMapValue<Variant, Color, "100">
  : Color extends ColorWithSpecificAccent<"900">
  ? DarkColorMapValue<Variant, Color, "50">
  : never}`;

export type ColorMap<Variant extends ColorVariants> = {
  [Color in StaticColor | ColorWithAccent]: ColorMapValue<Variant, Color>;
};
