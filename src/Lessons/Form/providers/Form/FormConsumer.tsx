import * as React from 'react';
import FormContext from '.';
import {IFormConsumerProps} from './IFormContext';

const FormConsumer: React.SFC<IFormConsumerProps> = ({children, ...props}) => (
  <FormContext.Consumer {...props}>{children}</FormContext.Consumer>
);

export default FormConsumer;
