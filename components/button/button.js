import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { clutchd } from '../themed/themes';
import { getTheme, themedProps, sizes } from '../themed/utils';

import Typography from '../typography';
const { Text } = Typography;

const propTypes = {
  theme: themedProps.theme,
  size: sizes,
  space: sizes
};

const defaultProps = {
  theme: clutchd.theme,
  size: 'default',
  space: 'default'
};

// styles
const StyledButtonText = styled(Text)`
  &&& {
    line-height: inherit;
    cursor: inherit;
    color: ${props => props.theme.colors.light};
  }
`;

const StyledButton = styled.button`
  font-size: 1em;
  padding: ${props => setSpace(props.space)};
  margin: 0;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  margin: 1px 2px;
  line-height: ${props => setSize(props.size)};
  border: 0;
  background-color: ${props => props.theme.colors.dark};

  &:hover {
    margin: 0 1px;
    border: 1px solid ${props => props.theme.colors.primary};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 26px,
      rgba(0, 0, 0, 0.075) 0px 2px 8px;
    &:hover ${StyledButtonText} {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const setSize = size => {
  switch (size) {
    case sizes.default:
      return '1.75em';
    case sizes.large:
      return '2.5em';
    case sizes.small:
      return '1.25em';
  }
};

const setSpace = space => {
  switch (space) {
    case 'default':
      return '0 1.5em';
    case 'large':
      return '0 2.5em';
    case 'small':
      return '0 0.75em';
  }
};

const Button = ({ theme, loading, children, ...props }) => {
  let currentTheme = getTheme(ThemeContext, theme);

  return (
    <StyledButton theme={currentTheme} {...props}>
      {loading ? (
        {
          /* add loading icon/skeleton component */
        }
      ) : (
        <StyledButtonText theme={currentTheme} {...props}>
          {children}
        </StyledButtonText>
      )}
    </StyledButton>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
