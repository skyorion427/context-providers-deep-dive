import * as React from 'react';
import ThemeConsumer from '../../providers/Theme/ThemeConsumer';
import {IFormProps} from './IForm';
import {IThemeContext} from '../../providers/Theme/IThemeContext';

const styles = {
  base: {
    fontSize: 30,
  },
  button: {
    boxShadow:
      '0 0.125rem 0.25rem 0 rgba(0,0,0,0.5), 0 0 0.3125rem 0 rgba(0,0,0,0.12)',
    border: 0,
    borderRadius: 2,
    cursor: 'pointer',
    fontSize: 30,
    marginTop: 20,
    padding: 20,
  },
};

const handleSubmit = e => {
  e.preventDefault();
};

const Form: React.SFC<IFormProps> = props => (
  <ThemeConsumer>
    {({theme, cycleTheme}: IThemeContext) => (
      <form {...props} onSubmit={handleSubmit} style={styles.base}>
        {theme.colors && (
          <>
            <div>
              Primary Color:{' '}
              <strong style={{color: theme.colors.primary}}>
                {theme.colors.primary}
              </strong>
            </div>

            <div>
              Secondary Color:{' '}
              <strong style={{color: theme.colors.secondary}}>
                {theme.colors.secondary}
              </strong>
            </div>
          </>
        )}

        <button
          onClick={cycleTheme}
          style={{
            ...styles.button,
            backgroundColor: theme.colors && theme.colors.primary,
            color: theme.colors && theme.colors.secondary,
          }}
          type="submit"
        >
          Cycle Theme!
        </button>
      </form>
    )}
  </ThemeConsumer>
);

export default Form;
