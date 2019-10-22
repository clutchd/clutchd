import PropTypes from 'prop-types';

let themeProps = {
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
    }),
    sizes: PropTypes.shape({
      xs: PropTypes.string,
      sm: PropTypes.string,
      md: PropTypes.string,
      lg: PropTypes.string,
      xl: PropTypes.string
    }),
    spaces: PropTypes.shape({
      xs: PropTypes.string,
      sm: PropTypes.string,
      md: PropTypes.string,
      lg: PropTypes.string,
      xl: PropTypes.string
    })
  })
};

themeProps = themeProps.theme;
export { themeProps };

/** Default theme for @clutchd/ui */
let clutchd = {
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
    },
    sizes: {
      xs: '1em',
      sm: '1.5em',
      md: '2em',
      lg: '2.5em',
      xl: '3em'
    },
    spaces: {
      xs: '0.05em 0.25em',
      sm: '0.075em 0.375em',
      md: '0.1em 0.5em',
      lg: '0.15em 0.75em',
      xl: '0.2em 1em'
    }
  }
};

clutchd = clutchd.theme;
export { clutchd };
