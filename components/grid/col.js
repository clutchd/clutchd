import React, { useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import StyledGrid from './grid';

const propTypes = {
  /** Determines vertical position */
  align: PropTypes.oneOf(['center', 'end', 'start', 'stretch']),
  /** Number of 'cells' that a Col will occupy (24 total cells) */
  span: PropTypes.number
};

const defaultProps = {
  align: 'center',
  span: 24
};

export const StyledCol = styled(StyledGrid)`
  &&& {
    display: flex;
    position: relative;
    width: 100%;
    margin: 0;
    background-color: rgba(0, 0, 125, 0.2);
    flex: 0 0 ${props => (props.span / 24) * 100 + '%'};
    max-width: ${props => (props.span / 24) * 100 + '%'};
    align-content: ${props =>
      (props.align === 'start' || props.align === 'end' ? 'flex-' : '') +
      props.align};
  }
`;

/**
 * The `Col` component...
 */
const Col = ({ loading, children, ...props }) => {
  return (
    <StyledCol {...props}>
      {loading ? children : <React.Fragment>{children}</React.Fragment>}
      {/* add loading icon/skeleton component */}
    </StyledCol>
  );
};

Col.propTypes = propTypes;
Col.defaultProps = defaultProps;

export default Col;
