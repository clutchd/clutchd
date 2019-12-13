import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../button";

storiesOf("Button", module)
  .addParameters({ component: Button })
  .add("Default", () => <Button>Test</Button>);
