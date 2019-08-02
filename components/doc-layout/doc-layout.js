import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// styles
const StyledDocLayout = styled.div`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
`;

const propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

const DocLayout = ({ title, category, description, children, ...props }) => {
  return (
    <StyledDocLayout {...props}>
      <h1>{title}</h1>
      <h2>{category}</h2>
      <p>{description}</p>
      {children}
    </StyledDocLayout>
  );
};

DocLayout.propTypes = propTypes;

export default DocLayout;
