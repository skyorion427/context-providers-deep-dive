import * as React from 'react';
import * as Markdown from 'react-markdown';

import {ISlidePageProps} from './ISlidePage';
import SliderConsumer from '../../providers/Slider/SliderConsumer';
import {ISliderContext} from '../../providers/Slider/ISliderContext';
import sanitizeTemplateString from '../../../utils/sanitize-template-strings';

const SlidePage: React.SFC<ISlidePageProps> = props => (
  <SliderConsumer>
    {({slide}: ISliderContext) => (
      <div {...props}>
        {slide ? (
          <>
            <h1>{slide.title}</h1>
            <Markdown source={sanitizeTemplateString(slide.content)} />
          </>
        ) : (
          'Slide not found!'
        )}
      </div>
    )}
  </SliderConsumer>
);

export default SlidePage;
