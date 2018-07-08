import * as React from 'react';
import SliderContext from '.';
import {ISliderConsumerProps} from './ISliderContext';

const SliderConsumer: React.SFC<ISliderConsumerProps> = ({
  children,
  ...props
}) => <SliderContext.Consumer {...props}>{children}</SliderContext.Consumer>;

export default SliderConsumer;
