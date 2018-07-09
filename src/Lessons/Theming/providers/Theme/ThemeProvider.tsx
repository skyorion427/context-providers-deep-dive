import * as React from 'react';
import {IThemeProviderProps, IThemeProviderState} from './IThemeContext';
import ThemeContext from './index';

class ThemeProvider extends React.Component<
  IThemeProviderProps,
  IThemeProviderState
> {
  constructor(props) {
    super(props);

    this.state = {
      themeIdx: 0,
    };
  }

  cycleTheme = () =>
    this.setState(({themeIdx}) => ({
      themeIdx: themeIdx + 1 < this.props.themes.length ? themeIdx + 1 : 0,
    }));

  render() {
    const {themes, children} = this.props;
    const {themeIdx} = this.state;

    return (
      <ThemeContext.Provider
        value={{theme: themes[themeIdx], cycleTheme: this.cycleTheme}}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeProvider;
