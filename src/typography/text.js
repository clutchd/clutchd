import React, { useEffect } from "react";
import Prism from "prismjs";
import styled from "styled-components";
import { StyledTypography, getWrapper } from "./typography";

const StyledText = styled(StyledTypography)`
  &&& {
    margin: 0 0 0 0;
    padding: 0;
    display: inline;
  }
`;

/** The `Text` component is meant to be used for single-line text. (inline, buttons, menus, etc.) */
const Text = ({ loading, children, ...props }) => {
  let as = "span";
  if (props.code) {
    as = "code";
  } else if (props.emphasis) {
    as = "em";
  } else if (props.mark) {
    as = "mark";
  } else if (props.strong) {
    as = "strong";
  } else if (props.strikethrough) {
    as = "del";
  } else if (props.underline) {
    as = "u";
  }
  const Wrapper = getWrapper(props);

  useEffect(() => {
    if (props.code) {
      Prism.highlightAll();
    }
  }, [props.code, children]);

  return (
    <Wrapper>
      <StyledText as={`${as}`} {...props}>
        {loading ? children : children}
        {/* add loading icon/skeleton component */}
      </StyledText>
    </Wrapper>
  );
};

export default Text;
