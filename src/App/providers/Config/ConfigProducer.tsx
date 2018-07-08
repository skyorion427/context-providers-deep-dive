import * as React from 'react';
import {IConfigProviderProps} from './IConfigContext';
import ConfigContext from './index';

export const ConfigProvider: React.SFC<IConfigProviderProps> = ({
  config,
  children,
}) => (
  <ConfigContext.Provider value={config}>{children}</ConfigContext.Provider>
);

export default ConfigProvider;
