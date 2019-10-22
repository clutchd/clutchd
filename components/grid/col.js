import React, { useEffect } from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Grid from './grid';

import { clutchd, themeProps } from '../style/themes';
import { getTheme } from '../style/utils';

const propTypes = {
  theme: themeProps,
  /** Number of 'cells' that a Col will occupy (24 total cells) */
  span: PropTypes.number,
  /** span of Col when page is <576px */
  xs: PropTypes.number,
  /** span of Col when page is >=576px */
  sm: PropTypes.number,
  /** span of Col when page is >=728px */
  md: PropTypes.number,
  /** span of Col when page is >=992px */
  lg: PropTypes.number,
  /** span of Col when page is >=1200px */
  xl: PropTypes.number,
  /** span of Col when page is >=1600px */
  xxl: PropTypes.number
};

const defaultProps = {
  theme: clutchd
};

const setSpan = span => {
  return css`
    flex: 0 0 ${(span / 24) * 100 + '%'};
    max-width: ${(span / 24) * 100 + '%'};
  `;
};

export const StyledCol = styled(Grid)`
  &&& {
    display: flex;
    position: relative;
    width: 100%;
    margin: 0;
    flex-direction: column;
    ${props => (props.span ? setSpan(props.span) : '')};
  }
  @media (max-width: 575px) {
    &&& {
      ${props => (props.xs ? setSpan(props.xs) : '')};
    }
  }
  @media (min-width: 576px) {
    &&& {
      ${props => (props.sm ? setSpan(props.sm) : '')};
    }
  }
  @media (min-width: 728px) {
    &&& {
      ${props => (props.md ? setSpan(props.md) : '')};
    }
  }
  @media (min-width: 992px) {
    &&& {
      ${props => (props.lg ? setSpan(props.lg) : '')};
    }
  }
  @media (min-width: 1200px) {
    &&& {
      ${props => (props.xl ? setSpan(props.xl) : '')};
    }
  }
  @media (min-width: 1600px) {
    &&& {
      ${props => (props.xxl ? setSpan(props.xxl) : '')};
    }
  }
`;

/**
 * The `Col` component...
 */
const Col = ({ theme, loading, children, ...props }) => {
  let currentTheme = getTheme(ThemeContext, theme);

  return (
    <StyledCol theme={currentTheme} {...props}>
      {loading ? children : <React.Fragment>{children}</React.Fragment>}
      {/* add loading icon/skeleton component */}
    </StyledCol>
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
