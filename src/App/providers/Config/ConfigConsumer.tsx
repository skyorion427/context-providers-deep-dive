import * as React from 'react';
import ConfigContext from '.';
import {IConfigConsumerProps} from './IConfigContext';

const ConfigConsumer: React.SFC<IConfigConsumerProps> = ({
  children,
  ...props
}) => <ConfigContext.Consumer {...props}>{children}</ConfigContext.Consumer>;

export default ConfigConsumer;
