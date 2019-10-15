import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const StyledHeader = styled.header`
  &&& {
    padding: 0.75em 0.75em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    min-width: 100%;
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
