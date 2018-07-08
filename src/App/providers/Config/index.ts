import * as React from 'react';
import {IConfigContext} from './IConfigContext';

export const ConfigContext: React.Context<IConfigContext> = React.createContext(
  {}
);

export default ConfigContext;
