import * as React from 'react';
import {ISliderProviderProps, ISliderProviderState} from './ISliderContext';
import SliderContext from './index';

class SliderProvider extends React.Component<
  ISliderProviderProps,
  ISliderProviderState
> {
  render() {
    const {children} = this.props;
    return (
      <SliderContext.Provider value={{}}>{children}</SliderContext.Provider>
    );
  }
}

export default SliderProvider;
