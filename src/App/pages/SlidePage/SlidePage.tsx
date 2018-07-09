import * as React from 'react';
import * as Markdown from 'react-markdown';

import {ISlidePageProps} from './ISlidePage';
import SliderConsumer from '../../providers/Slider/SliderConsumer';
import {ISliderContext} from '../../providers/Slider/ISliderContext';

const SlidePage: React.SFC<ISlidePageProps> = props => (
  <SliderConsumer>
    {({slide}: ISliderContext) => (
      <div {...props}>
        {slide ? (
          slide.content ? (
            <Markdown source={slide.content} />
          ) : (
            <slide.component />
          )
        ) : (
          'Slide not found!'
        )}
      </div>
    )}
  </SliderConsumer>
);

export default SlidePage;
