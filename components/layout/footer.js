import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

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
  }
`;

/** The `Footer` component... */
const Footer = ({ loading, children, ...props }) => {
  return (
    <StyledFooter {...props}>
      {loading ? children : children}
      {/* add loading icon/skeleton component */}
    </StyledFooter>
  );
};

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;

export default Footer;
