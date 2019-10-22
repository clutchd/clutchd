import React, { useEffect } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { clutchd, themeProps } from '../style/themes';
import { getTheme } from '../style/utils';

const propTypes = {
  theme: themeProps
};

const defaultProps = {
  theme: clutchd
};

const StyledFooter = styled.footer`
  &&& {
    padding: 0.75em 0.75em;
    display: flex;
    align-items: center;
    flex-direction: row;
    vertical-align: middle;
    flex-wrap: wrap;
    width: 100%;
    min-width: 100%;
    color: ${props => props.theme.colors.light};
    background-color: ${props => props.theme.colors.dark};
  }
`;

/** The `Footer` component... */
const Footer = ({ theme, loading, children, ...props }) => {
  let currentTheme = getTheme(ThemeContext, theme);

  return (
    <StyledFooter theme={currentTheme} {...props}>
      {loading ? children : children}
      {/* add loading icon/skeleton component */}
    </StyledFooter>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
