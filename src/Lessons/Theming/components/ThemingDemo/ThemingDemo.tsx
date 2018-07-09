import * as React from 'react';
import {IThemingDemoProps} from './IThemingDemo';
import ThemeProvider from '../../providers/Theme/ThemeProvider';
import {ITheme} from 'styles/themes/ITheme';
import Form from '../Form';

const LightTheme: ITheme = {
  colors: {
    primary: '#F05330',
    secondary: '#FFFFFF',
  },
};

const DarkTheme: ITheme = {
  colors: {
    primary: '#020202',
    secondary: '#F05330',
  },
};

const ThemingDemo: React.SFC<IThemingDemoProps> = props => (
  <ThemeProvider themes={[LightTheme, DarkTheme]}>
    <div {...props}>
      <Form />
    </div>
  </ThemeProvider>
);

export default ThemingDemo;
