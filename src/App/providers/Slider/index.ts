import * as React from 'react';
import {ISliderContext} from './ISliderContext';

export const SliderContext: React.Context<ISliderContext> = React.createContext(
  {}
);

export default SliderContext;
