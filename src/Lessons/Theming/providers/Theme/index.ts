import * as React from 'react';
import {IThemeContext} from './IThemeContext';

export const ThemeContext: React.Context<IThemeContext> = React.createContext({
  theme: {},
  cycleTheme: () => ({}),
});

export default ThemeContext;
