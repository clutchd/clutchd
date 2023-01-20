import { FlexCol } from "@clutchd/flex";
import { Title } from "@clutchd/text";
import { default as React, ReactNode } from "react";

/**
 * Type to define `Showcase` props
 */
interface IShowcaseProps {
  title: string;
  children: ReactNode;
}

function Showcase({ title, children, ...props }: IShowcaseProps) {
  return (
    <FlexCol>
      <Title className="pb-4">{title}</Title>
      <FlexCol className="pl-4" spaceY="space-y-4">
        {children}
      </FlexCol>
    </FlexCol>
  );
}

export { Showcase };
