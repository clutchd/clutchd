import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export const StyledGrid = styled.div`
  &&& {
    box-sizing: border-box;
  }
`;

/**
 * The `Grid` component...
 */
const Grid = ({ loading, children, ...props }) => {
  return (
    <StyledGrid {...props}>
      {loading ? children : <React.Fragment>{children}</React.Fragment>}
      {/* add loading icon/skeleton component */}
    </StyledGrid>
  );
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
