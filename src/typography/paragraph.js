import React, { useEffect } from "react";
import Prism from "prismjs";
import styled from "styled-components";
import { StyledTypography, getWrapper } from "./utils";

const StyledParagraph = styled(StyledTypography)`
  margin: 0 0 1em 0;
  padding: 0;
  margin-block-start: 1rem;
  margin-block-end: 1rem;
  margin-inline-start: 0;
  margin-inline-end: 0;
`;

/** The `Paragraph` component is meant to be used for multiline text. (block-level, content, descriptions, etc.) */
const Paragraph = ({ loading, children, ...props }) => {
  const Wrapper = getWrapper(props);

  useEffect(() => {
    if (props.code) {
      Prism.highlightAll();
    }
  }, [props.code, children]);

  return (
    <Wrapper>
      <StyledParagraph as={`p`} {...props}>
        {children}
      </StyledParagraph>
    </Wrapper>
  );
};

export default Paragraph;
