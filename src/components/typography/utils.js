import React from "react";
import styled, { css } from "styled-components";

export const StyledTypography = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
    "Segoe UI Symbol", "Noto Color Emoji";
  color: rgb(0, 0, 0, 0.8);
  font-size: 16px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  border: none;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  cursor: text;
  font-style: normal;
  user-select: text;
  ${props => (props.code ? `${code}` : ``)};
  ${props => (props.emphasis ? `${emphasis}` : ``)};
  ${props => (props.disable ? `${disable}` : ``)};
  ${props => (props.mark ? `${mark}` : ``)};
  ${props => (props.strikethrough ? `${strikethrough}` : ``)};
  ${props => (props.strong ? `${strong}` : ``)};
  ${props => (props.underline ? `${underline}` : ``)};
`;

const emphasis = css`
  font-style: italic;
`;

const disable = css`
  color: rgba(0, 0, 0, 0.4);
  cursor: default;
  user-select: none;
`;

const mark = css`
  background-color: #ffe58f;
`;

const strikethrough = css`
  text-decoration: line-through;
`;

const strong = css`
  font-weight: 700;
`;

const underline = css`
  text-decoration: underline;
`;

const StyledBlockquote = styled.blockquote`
  display: block;
  margin: 0 0 1em 0;
  padding: 0.5em 0 0.5em 1em;
  margin-block-start: 0;
  margin-block-end: 1em;
  margin-inline-start: 0;
  margin-inline-end: 0;
  border-left: 4px solid rgba(0, 0, 0, 0.1);
  font-size: 95%;

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
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
    "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier,
    monospace;
  background-color: rgba(40, 44, 52, 1);
  border: none;
  color: rgba(255, 255, 255, 0.95);
  border-radius: 5px;
  padding: 1.5px 7px;
  margin: 0 2px;
  font-size: 90%;
  white-space: normal;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  tab-size: 4;
  hyphens: none;

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: rgba(178, 178, 178, 1);
  }

  .token.punctuation {
    color: rgba(136, 198, 190, 1);
  }

  .token.tag,
  .token.operator {
    color: rgba(252, 146, 158, 1);
  }

  .token.attr-name {
    color: rgba(197, 165, 197, 1);
  }

  .token.namespace {
    color: rgba(255, 255, 255, 0.7);
  }

  .token.property,
  .token.number,
  .token.function-name,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: rgba(90, 155, 207, 1);
  }

  .token.boolean {
    color: rgba(255, 139, 80, 1);
  }

  .token.function {
    color: rgba(121, 182, 242, 1);
  }

  .token.class-name,
  .token.atrule {
    color: rgba(250, 200, 99, 1);
  }

  .token.selector,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: rgba(216, 222, 233, 1);
  }

  .token.important,
  .token.keyword {
    color: rgba(197, 165, 197, 1);
  }

  .token.string,
  .token.attr-value {
    color: rgba(141, 200, 145, 1);
  }

  .token.regex,
  .token.variable,
  .token.entity,
  .token.url {
    color: rgba(215, 222, 234, 1);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
  pre & {
    background: none;
    font-size: 100%;
    padding: 0;
    white-space: pre;
  }
`;

const StyledPre = styled.pre`
  font-family: Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console",
    "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier,
    monospace;
  background-color: rgba(40, 44, 52, 1);
  border: none;
  display: block;
  border-radius: 10px;
  padding: 1em;
  overflow: auto;
  white-space: pre;
  margin: 1.2em 0;

  & > :first-child {
    margin-top: 0;
  }
  & > :last-child {
    margin-bottom: 0;
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
