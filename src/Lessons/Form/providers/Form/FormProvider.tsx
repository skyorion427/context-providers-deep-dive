import * as React from 'react';
import {IFormProviderProps, IFormProviderState} from './IFormContext';
import FormContext from './index';

class FormProvider extends React.Component<
  IFormProviderProps,
  IFormProviderState
> {
  constructor(props) {
    super(props);

    // initialize state based off formConfig
    this.state = {
      form: props.formConfig,
    };
  }

  handleChange = (key: string) => e => {
    const {form} = this.state;
    this.setState({
      form: {
        ...form,
        fields: {
          ...form.fields,
          [key]: {...form.fields[key], value: e.target.value},
        },
      },
    });
  };

  render() {
    const {children} = this.props;
    const {form} = this.state;

    return (
      <FormContext.Provider
        value={{formState: form, handleChange: this.handleChange}}
      >
        {children}
      </FormContext.Provider>
    );
  }
}

export default FormProvider;
