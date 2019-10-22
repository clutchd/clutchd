import React from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { clutchd, themeProps } from '../style/themes';
import { getTheme } from '../style/utils';

import Typography from '../typography';
const { Text } = Typography;

const propTypes = {
  theme: themeProps
};

const defaultProps = {
  theme: clutchd
};

const StyledItemText = styled(Text)`
  &&& {
    line-height: inherit;
    cursor: inherit;
    color: ${props => props.theme.colors.light};
  }
`;

const StyledItem = styled.li`
  &&& {
    padding: 0 1.5em;
    margin: 0;
    display: inline-block;
    cursor: pointer;
    border-radius: 5px;
    margin: 1px 5px;
    background-color: ${props => props.theme.colors.dark};
  }
  &&&:hover {
    margin: 0 4px;
    border: 1px solid ${props => props.theme.colors.primary};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 26px,
      rgba(0, 0, 0, 0.075) 0px 2px 8px;
  }
  &&&:hover ${StyledItemText} {
    color: ${props => props.theme.colors.primary};
  }
`;

/**
 * The `Item` component...
 */
const Item = ({ theme, loading, children, ...props }) => {
  let currentTheme = getTheme(ThemeContext, theme);

  return (
    <StyledItem theme={currentTheme} {...props}>
      {loading ? (
        children
      ) : (
        <StyledItemText theme={currentTheme}>{children}</StyledItemText>
      )}
      {/* add loading icon/skeleton component */}
    </StyledItem>
  );
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
