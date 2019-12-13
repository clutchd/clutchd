import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// styles
const StyledButton = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
const propTypes = {
  theme: {
    main: PropTypes.string.isRequired
  }
};

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
const defaultProps = {
  theme: {
    main: 'palevioletred'
  }
};

const Button = ({ theme, loading, children, ...props }) => {
  return (
    <StyledButton theme={theme} {...props}>
      {loading ? children : children}{' '}
      {/* add loading icon/skeleton component */}
    </StyledButton>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
