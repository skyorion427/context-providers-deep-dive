export interface ITheme {
  colors?: any;
  fontSizes?: any;
  fontWeights?: any;
  fontFamilies?: any;
  spacings?: any;
  breakpoints?: any;
  zindexes?: any;
  shadows?: any;
}

export interface IThemeProps {
  theme: ITheme;
}

export default ITheme;
