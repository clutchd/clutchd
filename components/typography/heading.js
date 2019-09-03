import React, { useEffect } from 'react';
import Prism from 'prismjs';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledTypography, getWrapper } from './typography';

const propTypes = {
  /** Heading level (h1-h6) */
  level: PropTypes.number
};

const defaultProps = {
  level: 1
};

const headingFontSize = new Map([
  [1, '32px'],
  [2, '24px'],
  [3, '20px'],
  [4, '16px'],
  [5, '14px'],
  [6, '13px']
]);

const StyledHeading = styled(StyledTypography)`
  & {
    font-size: ${props => headingFontSize.get(props.level)};
    font-weight: ${props => (props.strong ? 700 : 600)};
    margin: 0 0 0.5em 0;
    margin-block-start: 0;
    margin-block-end: 0.5em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    line-height: 1.25;
    padding: 0;
  }
  * + & {
    margin: 1.2em 0 0.5em 0;
  }
`;

/** The `Heading` component is meant to be used for all heading text. (h1-h6, titles, etc.) */
const Heading = ({ level, loading, children, ...props }) => {
  const Wrapper = getWrapper(props);

  useEffect(() => {
    Prism.highlightAll();
  }, [props.code]);

  return (
    <Wrapper>
      <StyledHeading as={`h${level}`} level={level} {...props}>
        {loading ? children : children}
        {/* add loading icon/skeleton component */}
      </StyledHeading>
    </Wrapper>
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
