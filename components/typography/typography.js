import React, { useEffect } from 'react';
import Prism from 'prismjs';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const propTypes = {
  /** Blockquote style */
  blockquote: PropTypes.bool || PropTypes.string,
  /** Code style */
  code: PropTypes.bool,
  /** Disables text */
  disable: PropTypes.bool,
  /** Marks text */
  mark: PropTypes.bool,
  /** Wraps in pre tag */
  pre: PropTypes.bool,
  /** Strikethrough text */
  strikethrough: PropTypes.bool,
  /** Bolds text */
  strong: PropTypes.bool,
  /** Underlines text */
  underline: PropTypes.bool
};

const defaultProps = {
  blockquote: false,
  code: false,
  disable: false,
  mark: false,
  pre: false,
  strikethrough: false,
  strong: false,
  underline: false
};

const StyledBlockquote = styled.blockquote`
  & {
    display: block;
    margin: 0 0 1em 0;
    padding: 0.5em 0 0.5em 1em;
    margin-block-start: 0;
    margin-block-end: 1em;
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 4px solid rgba(0, 0, 0, 0.1);
    font-size: 95%;
  }
  & * {
    opacity: 0.7;
  }
  & > :first-child {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
  }
`;

const code = css`
  & {
    font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
      'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
      monospace;
    background-color: rgb(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 0 3px 0 3px;
    font-size: 95%;
  }
  pre & {
    border: none;
    background-color: rgb(0, 0, 0, 0);
    font-size: 100%;
    padding: 0;
  }
`;

const disable = css`
  & {
    color: rgba(0, 0, 0, 0.25);
    cursor: default;
    user-select: none;
    padding: 0;
  }
`;

const mark = css`
  & {
    background-color: #ffe58f;
    padding: 0;
  }
`;

const StyledPre = styled.pre`
  & {
    font-family: Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console',
      'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono',
      'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier,
      monospace;
    display: block;
    background-color: rgb(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    padding: 1em;
    overflow: auto;
    white-space: pre;
    margin: 1em 0;
  }
  & > :first-child {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
  }
`;

const strikethrough = css`
  & {
    text-decoration: line-through;
    -webkit-text-decorations-in-effect: line-through;
    padding: 0;
  }
`;

const strong = css`
  & {
    font-weight: 700;
    padding: 0;
  }
`;

const underline = css`
  & {
    text-decoration: underline;
    padding: 0;
  }
`;

export const StyledTypography = styled.article`
  & {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', 'Noto Color Emoji';
    color: rgb(0, 0, 0, 0.8);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    margin: 3em 0 3em 0;
    padding: 0 2em;
    border: none;
    text-align: left;
    -webkit-font-smoothing: antialiased;
    cursor: text;
    display: block;
    ${props => (props.code ? `${code}` : ``)};
    ${props => (props.disable ? `${disable}` : ``)};
    ${props => (props.mark ? `${mark}` : ``)};
    ${props => (props.strikethrough ? `${strikethrough}` : ``)};
    ${props => (props.strong ? `${strong}` : ``)};
    ${props => (props.underline ? `${underline}` : ``)};
  }
`;

export const getWrapper = props => {
  if (props.pre === true) {
    return StyledPre;
  }

  if (props.blockquote === true) {
    return StyledBlockquote;
  }

  return React.Fragment;
};

/**
 * The `Typography` component is meant to be used as a wrapper component for multiple `Heading`, `Paragraph`, and `Text` components.
 *
 * _NOTE:_ All `Typography` props can be used on all typography components.  However, it is **strongly** recommended to only use them on the `Text` component.
 */
const Typography = ({ loading, children, ...props }) => {
  const Wrapper = getWrapper(props);

  useEffect(() => {
    Prism.highlightAll();
  }, [props.code]);

  return (
    <Wrapper>
      <StyledTypography {...props}>
        {loading ? children : <React.Fragment>{children}</React.Fragment>}
        {/* add loading icon/skeleton component */}
      </StyledTypography>
    </Wrapper>
  );
};

Typography.propTypes = propTypes;
Typography.defaultProps = defaultProps;

export default Typography;
