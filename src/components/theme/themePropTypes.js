import PropTypes from "prop-types";

const ThemePropTypes = {
  theme: PropTypes.shape({
    style: PropTypes.string.isRequired,
    color: PropTypes.shape({
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string.isRequired,
      accent: PropTypes.string.isRequired,
      success: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      warning: PropTypes.string.isRequired,
      error: PropTypes.string.isRequired,
    }),
    font: PropTypes.shape({
      family: PropTypes.string.isRequired,
    }),
  }),
};

export default ThemePropTypes;
