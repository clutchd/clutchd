import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledGrid from './grid';

const propTypes = {
  /** Determines vertical position */
  align: PropTypes.oneOf(['center', 'end', 'start', 'stretch']),
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
  align: 'center',
  gutter: 0,
  justify: 'start'
};

const StyledRow = styled(StyledGrid)`
  &&& {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    background-color: rgba(125, 0, 0, 0.2);
    width: 100%;
    justify-content: ${props =>
      (props.justify === 'start' || props.justify === 'end' ? 'flex-' : '') +
      props.justify};
    align-content: ${props =>
      (props.align === 'start' || props.align === 'end' ? 'flex-' : '') +
      props.align};
  }
  &&& > * {
    padding-left: ${props => props.gutter + 'px'};
    padding-right: ${props => props.gutter + 'px'};
  }
`;

/**
 * The `Row` component...
 */
const Row = ({ loading, children, ...props }) => {
  return (
    <StyledRow {...props}>
      {loading ? children : <React.Fragment>{children}</React.Fragment>}
      {/* add loading icon/skeleton component */}
    </StyledRow>
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
