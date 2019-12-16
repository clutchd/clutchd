import React, { useEffect } from "react";
import Prism from "prismjs";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StyledTypography, getWrapper } from "./utils";

const propTypes = {
  /** Heading level (h1-h6) */
  level: PropTypes.number
};

const defaultProps = {
  level: 1
};

const headingFontSize = [
  ["40px", "2.5rem"],
  ["32px", "2rem"],
  ["28px", "1.75rem"],
  ["24px", "1.5rem"],
  ["20px", "1.25rem"],
  ["16px", "1rem"]
];

const StyledHeading = styled(StyledTypography)`
  font-size: ${props => headingFontSize[props.level - 1][0]};
  font-size: ${props => headingFontSize[props.level - 1][1]};
  font-weight: ${props => (props.strong ? 700 : 600)};
  margin: 0 0 0.5em 0;
  margin-block-start: 0;
  margin-block-end: 0.5em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  line-height: 1.25;
  padding: 0;
  * + & {
    margin: 1.2em 0 0.5em 0;
  }
`;

/** The `Heading` component is meant to be used for all heading text. (h1-h6, titles, etc.) */
const Heading = ({ level, loading, children, ...props }) => {
  const Wrapper = getWrapper(props);

  useEffect(() => {
    if (props.code) {
      Prism.highlightAll();
    }
  }, [props.code, children]);

  return (
    <Wrapper>
      <StyledHeading as={`h${level}`} level={level} {...props}>
        {children}
      </StyledHeading>
    </Wrapper>
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
