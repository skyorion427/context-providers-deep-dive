import * as React from 'react';
import {ISliderContext} from './ISliderContext';

export const SliderContext: React.Context<ISliderContext> = React.createContext(
  {
    lessons: [],
    lesson: undefined,
    lessonKey: undefined,
    lessonPosition: 0,
    slide: undefined,
    slideKey: undefined,
    slidePosition: 0,
    getSlideUri: () => '',
    getFirstSlideUri: () => '',
    getLastSlideUri: () => '',
    getPreviousSlideUri: () => '',
    getNextSlideUri: () => '',
    isActiveSlide: () => false,
  }
);

export default SliderContext;
