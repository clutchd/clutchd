import { useContext } from 'react';

/** Gets the wrapper `Style` component's theme.  If none exists, reverts to the components original theme.*/
export const getTheme = (themeContext, themeProp) => {
  let newTheme = useContext(themeContext);
  if (newTheme === undefined) {
    newTheme = themeProp;
  } else {
    newTheme = newTheme.theme;
  }
  return newTheme;
};
