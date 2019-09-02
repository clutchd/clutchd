import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledTypography } from './typography';

const propTypes = {};

const defaultProps = {};

const StyledParagraph = styled(StyledTypography)`
  &&& {
    margin: 0 0 1em 0;
    padding: 0;
  }
`;

/** The `Paragraph` component is meant to be used for multiline text. (content, descriptions, etc.) */
const Paragraph = ({ loading, children, ...props }) => {
  return (
    <StyledParagraph as={`p`} {...props}>
      {loading ? children : children}
      {/* add loading icon/skeleton component */}
    </StyledParagraph>
  );
};

Paragraph.propTypes = propTypes;
Paragraph.defaultProps = defaultProps;

export default Paragraph;
