import * as React from 'react';
import FormProvider from './providers/Form/FormProvider';
import FormConsumer from './providers/Form/FormConsumer';
import {IFormContext} from './providers/Form/IFormContext';
import Debug from './components/Debug';
import {Input} from './styles';

const App = () => (
  <div>
    <FormProvider
      formConfig={{
        fields: {
          first: {
            label: 'first',
            value: '',
          },
          last: {
            label: 'last',
            value: '',
          },
          email: {
            label: 'email',
            value: '',
          },
        },
      }}
    >
      <Debug />
      <FormConsumer>
        {({form: formState, handleChange}: IFormContext) => (
          <form>
            {Object.entries(formState.fields).map(([idx, field]) => (
              <Input
                key={idx}
                type="text"
                value={field.value}
                onChange={handleChange(idx)}
                placeholder={field.label}
              />
            ))}
          </form>
        )}
      </FormConsumer>
    </FormProvider>
  </div>
);

export default App;
