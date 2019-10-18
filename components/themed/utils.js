import { useContext } from 'react';
import PropTypes from 'prop-types';

/** Gets the wrapper `Themed` component's theme.  If none exists, reverts to the components original theme.*/
export const getTheme = (themeContext, themeProp) => {
  let newTheme = useContext(themeContext);
  if (newTheme === undefined) {
    newTheme = themeProp;
  } else {
    newTheme = newTheme.theme;
  }
  return newTheme;
};

const sizes = {
  default: 'default',
  large: 'large',
  small: 'small'
};
Object.freeze(sizes);
export { sizes };

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
