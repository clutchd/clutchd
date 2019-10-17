import PropTypes from 'prop-types';

export const themedProps = {
  theme: PropTypes.shape({
    colors: PropTypes.shape({
      primary: PropTypes.string,
      secondary: PropTypes.string,
      light: PropTypes.string,
      dark: PropTypes.string,
      info: PropTypes.string,
      success: PropTypes.string,
      warning: PropTypes.string,
      danger: PropTypes.string
    })
  })
};

/** Default theme for @clutchd/ui */
export const clutchd = {
  theme: {
    colors: {
      primary: `#AF7AC5`,
      secondary: `rgba(136, 217, 230, 1)`,
      light: `rgba(255, 255, 255, 1)`,
      dark: `#17202A`,
      info: `rgba(136, 217, 230, 1)`,
      success: `rgba(66, 255, 66, 1)`,
      warning: `rgba(255, 255, 66, 1)`,
      danger: `rgba(255, 66, 66, 1)`
    }
  }
};
