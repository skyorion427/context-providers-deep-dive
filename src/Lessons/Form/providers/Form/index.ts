import * as React from 'react';
import {IFormContext} from './IFormContext';

export const FormContext: React.Context<IFormContext> = React.createContext({
  form: {
    fields: {},
  },
  handleChange: () => () => ({}),
});

export default FormContext;
