import React, { useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Grid from './grid';

import { clutchd, themeProps } from '../style/themes';
import { getTheme } from '../style/utils';

const propTypes = {
  theme: themeProps,
  /** Spacing between Cols (px) */
  gutter: PropTypes.number,
  /** Determines horizontal position */
  justify: PropTypes.oneOf([
    'center',
    'end',
    'space-around',
    'space-between',
    'space-evenly',
    'start'
  ])
};

const defaultProps = {
  theme: clutchd,
  gutter: 0,
  justify: 'start'
};

const StyledRow = styled(Grid)`
  &&& {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    width: 100%;
    justify-content: ${props =>
      (props.justify === 'start' || props.justify === 'end' ? 'flex-' : '') +
      props.justify};
    flex-direction: row;
  }
  &&& > * {
    padding-left: ${props => props.gutter + 'px'};
    padding-right: ${props => props.gutter + 'px'};
  }
`;

/**
 * The `Row` component...
 */
const Row = ({ theme, loading, children, ...props }) => {
  let currentTheme = getTheme(ThemeContext, theme);

  return (
    <StyledRow theme={currentTheme} {...props}>
      {loading ? children : <React.Fragment>{children}</React.Fragment>}
      {/* add loading icon/skeleton component */}
    </StyledRow>
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
