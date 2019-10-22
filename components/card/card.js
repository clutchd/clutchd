import React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';

import { clutchd, themeProps } from '../style/themes';
import { getTheme } from '../style/utils';

import Typography from '../typography';
const { Text } = Typography;

const propTypes = {
  theme: themeProps,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  space: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  image: PropTypes.string
};

const defaultProps = {
  theme: clutchd,
  size: 'md',
  space: 'md',
  image: undefined
};

// styles
const StyledCardImage = styled.img`
  padding: 0;
  margin: -1px;
  position: relative;
  display: block;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
`;

const StyledCard = styled.div`
  border-radius: 5px;
  border: 2px solid ${props => props.theme.colors.dark};
  padding: 0;
  overflow: hidden;
  min-width: 0;
  min-height: 0;
  display: inline-flex;
`;

const Card = ({ image, theme, loading, children, ...props }) => {
  let currentTheme = getTheme(ThemeContext, theme);

  return (
    <StyledCard theme={currentTheme} {...props}>
      {image ? (
        <StyledCardImage src={image} />
      ) : (
        <React.Fragment>{children}</React.Fragment>
      )}
      {/* {loading
          ? {
              /* add loading icon/skeleton component }
      : {children}} */}
    </StyledCard>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default Card;
