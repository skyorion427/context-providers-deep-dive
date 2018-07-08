import * as React from 'react';

export interface IConfigContext {
  title?: string;
  subTitle?: string;
}

export interface IConfigProviderProps {
  children: React.ReactNode;
  config: IConfigContext;
}

export interface IConfigConsumerProps
  extends React.ConsumerProps<IConfigContext> {}
