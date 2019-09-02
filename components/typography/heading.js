import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledTypography } from './typography';

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
  &&& {
    font-size: ${props => headingFontSize.get(props.level)};
    font-weight: ${props => (props.strong ? 700 : 600)};
    margin: 0 0 0.5em 0;
    line-height: 1.25;
    padding: 0;
  }
  * + &&& {
    margin: 1em 0 0.5em 0;
  }
`;

/** The `Heading` component is meant to be used for all heading text. (h1-h6, titles, etc.) */
const Heading = ({ level, loading, children, ...props }) => {
  return (
    <StyledHeading as={`h${level}`} level={level} {...props}>
      {loading ? children : children}
      {/* add loading icon/skeleton component */}
    </StyledHeading>
  );
};

Heading.propTypes = propTypes;
Heading.defaultProps = defaultProps;

export default Heading;
