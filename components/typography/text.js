import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { StyledTypography } from './typography';

const propTypes = {};

const defaultProps = {};

const StyledText = styled(StyledTypography)`
  &&& {
    margin: 0 0 0 0;
    padding: 0;
  }
`;

/** The `Text` component is meant to be used for single-line text. (buttons, menus, etc.) */
const Text = ({ loading, children, ...props }) => {
  let as = 'span';
  if (props.code) {
    as = 'code';
  } else if (props.mark) {
    as = 'mark';
  } else if (props.strong) {
    as = 'strong';
  } else if (props.strikethrough) {
    as = 'del';
  } else if (props.underline) {
    as = 'u';
  }
  return (
    <StyledText as={`${as}`} {...props}>
      {loading ? children : children}
      {/* add loading icon/skeleton component */}
    </StyledText>
  );
};

Text.propTypes = propTypes;
Text.defaultProps = defaultProps;

export default Text;
