import { type expect } from "bun:test";
import { type TestingLibraryMatchers } from "@testing-library/jest-dom/matchers";

export {};
declare module "bun:test" {
  interface Matchers<T = any>
    extends TestingLibraryMatchers<
      ReturnType<typeof expect.stringContaining>,
      T
    > {}
}
