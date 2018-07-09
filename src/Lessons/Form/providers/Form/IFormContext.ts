import * as React from 'react';

export interface IForm {
  fields: {
    [key: string]: {
      label: string;
      value: string;
    };
  };
}

export interface IFormContext {
  formState: IForm;
  handleChange: (key: string) => (e: any) => any;
}

export interface IFormProviderProps {
  children: React.ReactNode;
  formConfig: IForm;
}

export interface IFormProviderState {
  form: IForm;
}

export interface IFormConsumerProps extends React.ConsumerProps<IFormContext> {}
