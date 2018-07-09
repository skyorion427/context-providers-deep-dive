import * as React from 'react';
import {IFormContext} from './IFormContext';

export const FormContext: React.Context<IFormContext> = React.createContext({
  formState: {
    fields: {},
  },
  handleChange: () => () => ({}),
});

export default FormContext;
