// unmodified from https://github.com/dcastil/tailwind-merge/blob/main/src/lib/class-utils.ts v1.14.0

export { type Config } from "tailwind-merge";
export type ThemeObject = Record<string, ClassGroup>;
export type ClassGroupId = string;
export type ClassGroup = readonly ClassDefinition[];
type ClassDefinition = string | ClassValidator | ThemeGetter | ClassObject;
export type ClassValidator = (classPart: string) => boolean;
export interface ThemeGetter {
  (theme: ThemeObject): ClassGroup;
  isThemeGetter: true;
}
type ClassObject = Record<string, readonly ClassDefinition[]>;
