import PropTypes from "prop-types";

export const themePropTypes = {
  theme: {
    color: {
      primary: PropTypes.string.isRequired,
      secondary: PropTypes.string.isRequired,
      success: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
      warning: PropTypes.string.isRequired,
      error: PropTypes.string.isRequired,
    },
    font: {
      family: PropTypes.string.isRequired,
    },
  },
};

export const themeProps = {
  theme: {
    color: {
      primary: "purple",
    },
    font: {
      baseSize: "15px",
      family:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji","Segoe UI Symbol", "Noto Color Emoji"',
    },
  },
};
