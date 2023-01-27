import { heightMap, widthMap, spacing, spacingPx, SpacingVariants } from "..";

/**
 * A custom type use to simplify consistent height and width, only focuses on absolute sizing
 * {@link https://tailwindcss.com/docs/height}
 * {@link https://tailwindcss.com/docs/width}
 */

export function getSize(base: SpacingVariants) {
  return `${heightMap[base]} ${widthMap[base]}`;
}

export function getSizePx(base: SpacingVariants) {
  return spacingPx[spacing.indexOf(base)];
}

export interface WithSize {
  size?: SpacingVariants;
}
