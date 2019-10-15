import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  /** Determines flex position */
  align: PropTypes.oneOf(['center', 'end', 'start', 'stretch'])
};

const defaultProps = {
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
const Grid = ({ loading, children, ...props }) => {
  return (
    <React.Fragment>
      <StyledGrid {...props}>
        {loading ? children : <React.Fragment>{children}</React.Fragment>}
        {/* add loading icon/skeleton component */}
      </StyledGrid>
    </React.Fragment>
  );
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
