import * as React from 'react';
import {ILesson} from 'Lessons/ILesson';
import {ISlide} from 'Lessons/ISlide';

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
}

export interface ISliderProviderProps {
  lessons: ILesson[];
  children: React.ReactNode;
}

export interface ISliderProviderState {}

export interface ISliderConsumerProps
  extends React.ConsumerProps<ISliderContext> {}
