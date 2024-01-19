import { Copyright, getCopyright } from "@clutchd/copyright";
import * as React from "react";

function CopyrightShowcase() {
  return (
    <>
      <Copyright>Standard Copyright</Copyright>
      <p>{getCopyright()} Custom Copyright</p>
    </>
  );
}

export { CopyrightShowcase };
