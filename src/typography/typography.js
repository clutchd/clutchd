import React, { useEffect } from "react";
import Prism from "prismjs";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StyledTypography, getWrapper } from "./utils";

const propTypes = {
  /** Blockquote style */
  blockquote: PropTypes.bool || PropTypes.string,
  /** Code style */
  code: PropTypes.bool,
  /** Disables text */
  disable: PropTypes.bool,
  /** Emphasizes text */
  emphasis: PropTypes.bool,
  /** Marks text */
  mark: PropTypes.bool,
  /** Wraps in pre tag */
  pre: PropTypes.bool,
  /** Strikethrough text */
  strikethrough: PropTypes.bool,
  /** Bolds text */
  strong: PropTypes.bool,
  /** Underlines text */
  underline: PropTypes.bool
};

const defaultProps = {
  blockquote: false,
  code: false,
  disable: false,
  mark: false,
  pre: false,
  strikethrough: false,
  strong: false,
  underline: false
};

const StyledArticle = styled(StyledTypography)`
  display: block;
  margin: 3em 0;
  padding: 0 2em;
`;

/**
 * The `Typography` component is meant to be used as a wrapper component for multiple `Heading`, `Paragraph`, and `Text` components.
 */
const Typography = ({ loading, children, ...props }) => {
  const Wrapper = getWrapper(props);

  useEffect(() => {
    if (props.code) {
      Prism.highlightAll();
    }
  }, [props.code, children]);

  return (
    <Wrapper>
      <StyledArticle as={"article"} {...props}>
        <React.Fragment>{children}</React.Fragment>
      </StyledArticle>
    </Wrapper>
  );
};

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
