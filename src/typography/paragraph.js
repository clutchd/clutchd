import React, { useEffect } from "react";
import Prism from "prismjs";
import styled from "styled-components";
import { StyledTypography, getWrapper } from "./typography";

const StyledParagraph = styled(StyledTypography)`
  &&& {
    margin: 0 0 1em 0;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
  }
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
        {loading ? children : children}
        {/* add loading icon/skeleton component */}
      </StyledParagraph>
    </Wrapper>
  );
};

export default Paragraph;
