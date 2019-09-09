import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  /** Additional styling */
  style: PropTypes.object
};

const defaultProps = {
  style: {}
};

const StyledHeader = styled.header`
  &&& {
    display: flex;
    flex-direction: row;
    min-height: 4em;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.25);
    width: 100%;
    min-width: 100%;
    ${props => props.style};
  }
`;

/** The `Header` component... */
const Header = ({ loading, children, ...props }) => {
  return (
    <StyledHeader {...props}>
      {loading ? children : children}
      {/* add loading icon/skeleton component */}
    </StyledHeader>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
