import React, { useEffect } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { clutchd, themeProps } from '../style/themes';
import { getTheme } from '../style/utils';

const propTypes = {
  theme: themeProps,
  /** Determines flex position */
  align: PropTypes.oneOf(['center', 'end', 'start', 'stretch'])
};

const defaultProps = {
  theme: clutchd,
  align: 'center'
};

const StyledGrid = styled.div`
  &&& {
    box-sizing: border-box;
    align-content: ${props =>
      (props.align === 'start' || props.align === 'end' ? 'flex-' : '') +
      props.align};
    align-items: ${props =>
      (props.align === 'start' || props.align === 'end' ? 'flex-' : '') +
      props.align};
  }
`;

/**
 * The `Grid` component...
 */
const Grid = ({ theme, loading, children, ...props }) => {
  let currentTheme = getTheme(ThemeContext, theme);

  return (
    <React.Fragment>
      <StyledGrid theme={currentTheme} {...props}>
        {loading ? children : <React.Fragment>{children}</React.Fragment>}
        {/* add loading icon/skeleton component */}
      </StyledGrid>
    </React.Fragment>
  );
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
