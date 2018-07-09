import * as React from 'react';
import ThemeProvider from './providers/Theme/ThemeProvider';
import {ITheme} from 'styles/themes/ITheme';
import Form from './components/Form';

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

const App = () => (
  <ThemeProvider themes={[LightTheme, DarkTheme]}>
    <div>
      <Form />
    </div>
  </ThemeProvider>
);

export default App;
