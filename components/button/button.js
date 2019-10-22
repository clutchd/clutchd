import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { clutchd, themeProps } from '../style/themes';
import { getTheme } from '../style/utils';

import Typography from '../typography';
const { Text } = Typography;

const propTypes = {
  theme: themeProps,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  space: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl'])
};

const defaultProps = {
  theme: clutchd,
  size: 'md',
  space: 'md'
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
  padding: ${props => props.theme.spaces[props.space]};
  margin: 0;
  display: inline-block;
  cursor: pointer;
  border-radius: 5px;
  margin: 1px 2px;
  line-height: ${props => props.theme.sizes[props.size]};
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
