import { Copyright, getCopyright } from "@clutchd/copyright";
import * as React from "react";
import { Showcase } from "~/components/showcase";

function CopyrightShowcase() {
  return (
    <Showcase
      title="Copyright"
      description="A small utility primitive to assist with returning the current copyright year."
      pkg="@clutchd/copyright"
      pkgType="primitive"
      stable
      rsc
    >
      <div className="flex flex-col gap-2">
        <Copyright />
        <div>
          <Copyright>Copyright div with text</Copyright>
        </div>
        <p>{getCopyright()} Copyright with custom implementation</p>
      </div>
    </Showcase>
  );
}

export { CopyrightShowcase };
