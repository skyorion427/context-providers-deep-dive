import * as React from 'react';
import ThemeContext from '.';
import {IThemeConsumerProps} from './IThemeContext';

const ThemeConsumer: React.SFC<IThemeConsumerProps> = ({
  children,
  ...props
}) => <ThemeContext.Consumer {...props}>{children}</ThemeContext.Consumer>;

export default ThemeConsumer;
