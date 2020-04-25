import styled from "styled-components";
import PropTypes from "prop-types";

const propTypes = {
  /** Determines flex position */
  align: PropTypes.oneOf(["center", "end", "start", "stretch"])
};

const defaultProps = {
  align: "center"
};

const Grid = styled.div`
  &&& {
    box-sizing: border-box;
    align-content: ${props =>
      (props.align === "start" || props.align === "end" ? "flex-" : "") +
      props.align};
  }
`;

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default Grid;
