import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import Menu from './menu';
import Typography from '../typography';
const { Text } = Typography;

const propTypes = {};

const defaultProps = {};

const StyledItemText = styled(Text)`
  &&& {
    line-height: inherit;
    cursor: inherit;
    color: inherit;
  }
`;

const StyledItem = styled.li`
  &&& {
    padding: 0 1.5em;
    margin: 0;
    display: inline-block;
    cursor: pointer;
  }
  &&&:hover ${StyledItemText} {
    color: red;
  }
`;

/**
 * The `Item` component...
 */
const Item = ({ loading, children, ...props }) => {
  return (
    <StyledItem {...props}>
      {loading ? children : <StyledItemText>{children}</StyledItemText>}
      {/* add loading icon/skeleton component */}
    </StyledItem>
  );
};

Item.propTypes = propTypes;
Item.defaultProps = defaultProps;

export default Item;
