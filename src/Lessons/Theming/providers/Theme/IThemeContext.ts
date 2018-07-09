import * as React from 'react';

export interface ITheme {
  colors?: {
    primary?: string;
    secondary?: string;
  };
}

export interface IThemeContext {
  theme: ITheme;
  cycleTheme: () => any;
}

export interface IThemeProviderProps {
  children: React.ReactNode;
  themes: ITheme[];
}

export interface IThemeProviderState {
  themeIdx: number;
}

export interface IThemeConsumerProps
  extends React.ConsumerProps<IThemeContext> {}
