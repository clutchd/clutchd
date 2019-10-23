import React from 'react';
import styled, { css, ThemeContext } from 'styled-components';
import { transparentize } from 'polished';
import PropTypes from 'prop-types';

import { clutchd, themeProps } from '../style/themes';
import { getTheme } from '../style/utils';

import Typography from '../typography';
const { Paragraph, Heading } = Typography;

const propTypes = {
  theme: themeProps,
  title: PropTypes.string,
  content: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  space: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  image: PropTypes.string,
  overlay: PropTypes.bool
};

const defaultProps = {
  theme: clutchd,
  size: 'md',
  space: 'md',
  image: undefined,
  overlay: false
};

// styles
const StyledCard = styled.div`
  border-radius: 5px;
  border: 2px solid ${props => transparentize(0.25, props.theme.colors.dark)};
  padding: 0;
  overflow: hidden;
  max-width: 100%;
  max-height: 100%;
  min-width: 0;
  min-height: 0;
  display: inline-flex;
  :hover {
    border: 2px solid ${props => props.theme.colors.dark};
  }
`;

const StyledCardImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const StyledCardImage = styled.img`
  padding: 0;
  position: relative;
  display: block;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  max-height: 100%;
  max-width: 100%;
`;

const StyledCardImageOverlay = styled.div`
  ${StyledCard}:hover & {
    display: block;
    background: ${props => transparentize(0.25, props.theme.colors.dark)};
  }
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  color: #fff;
`;

const StyledCardImageOverlayTitle = styled(Heading)`
  &&& {
    color: #fff;
    padding: 5%;
  }
`;

const StyledCardImageOverlayContent = styled(Paragraph)`
  &&& {
    color: #fff;
    padding: 0 5% 5% 5%;
  }
`;

const Card = ({
  title,
  content,
  image,
  theme,
  loading,
  children,
  ...props
}) => {
  let currentTheme = getTheme(ThemeContext, theme);

  let imageOverlay;

  if (props.overlay) {
    imageOverlay = (
      <StyledCardImageOverlay theme={currentTheme}>
        <StyledCardImageOverlayTitle>{title}</StyledCardImageOverlayTitle>
        <StyledCardImageOverlayContent>{content}</StyledCardImageOverlayContent>
      </StyledCardImageOverlay>
    );
  }

  return (
    <StyledCard theme={currentTheme} {...props}>
      {image ? (
        <StyledCardImageContainer theme={currentTheme}>
          <StyledCardImage theme={currentTheme} src={image} />
          {imageOverlay}
        </StyledCardImageContainer>
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
