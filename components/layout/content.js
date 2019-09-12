import React, { useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

const StyledContent = styled.main`
  &&& {
    padding: 0.75em 0.75em;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex: auto;
    width: 100%;
    min-width: 100%;
  }
`;

/** The `Content` component... */
const Content = ({ loading, children, ...props }) => {
  return (
    <StyledContent {...props}>
      {loading ? children : children}
      {/* add loading icon/skeleton component */}
    </StyledContent>
  );
};

Content.propTypes = propTypes;
Content.defaultProps = defaultProps;

export default Content;
