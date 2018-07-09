import * as React from 'react';
import {ILesson} from 'Lessons/ILesson';
import {ISlide} from 'Lessons/ISlide';
import {RouteComponentProps} from 'react-router';

export interface ISliderContext {
  lessons: ILesson[];
  lesson: ILesson | undefined;
  lessonKey: number | undefined;
  lessonPosition: number;
  slide: ISlide | undefined;
  slideKey: number | undefined;
  slidePosition: number;
  getSlideUri: (lessonKey: number, slideKey: number) => string;
  getFirstSlideUri: () => string;
  getLastSlideUri: () => string;
  getPreviousSlideUri: () => string;
  getNextSlideUri: () => string;
  isActiveSlide: (lessonKey: number, slideKey: number) => boolean;
}

export interface ISliderProviderProps extends RouteComponentProps<{}> {
  lessons: ILesson[];
}

export interface ISliderProviderState {}

export interface ISliderConsumerProps
  extends React.ConsumerProps<ISliderContext> {}
