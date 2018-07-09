import * as React from 'react';
import {ISliderProviderProps, ISliderProviderState} from './ISliderContext';
import SliderContext from './index';
import * as qs from 'query-string';
import {ILesson} from 'Lessons/ILesson';
import {ISlide} from '../../../Lessons/ISlide';

class SliderProvider extends React.Component<
  ISliderProviderProps,
  ISliderProviderState
> {
  getSlideUri = (lessonKey: number, slideKey: number) =>
    `/?lesson=${lessonKey}&slide=${slideKey}`;
  getFirstSlideUri = () => this.getSlideUri(0, 0);
  getLastSlideUri = () => {
    try {
      const {lessons} = this.props;
      const lessonKey = lessons.length - 1;
      const slideKey = lessons[lessonKey].slides.length - 1;
      return this.getSlideUri(lessonKey, slideKey);
    } catch (err) {
      throw new Error('Bad index');
    }
  };

  getActiveLessonKey = (): number | undefined =>
    parseInt(qs.parse(window.location.search).lesson, 10);
  getActiveSlideKey = (): number | undefined =>
    parseInt(qs.parse(window.location.search).slide, 10);

  getActiveLesson = (): ILesson | undefined => {
    const lessonKey = this.getActiveLessonKey();
    return lessonKey !== undefined ? this.props.lessons[lessonKey] : undefined;
  };

  getActiveSlide = (): ISlide | undefined => {
    const lessonKey = this.getActiveLessonKey();
    const slideKey = this.getActiveSlideKey();

    if (lessonKey === undefined || slideKey === undefined) {
      return;
    }

    const lesson = this.props.lessons[lessonKey];
    return lesson && lesson.slides[slideKey];
  };

  render() {
    const {lessons, children} = this.props;
    const lessonKey = this.getActiveLessonKey();
    const lessonPosition = (lessonKey !== undefined && lessonKey + 1) || 0;
    const slideKey = this.getActiveLessonKey();
    const slidePosition = (slideKey !== undefined && slideKey + 1) || 0;
    return (
      <SliderContext.Provider
        value={{
          lessons,
          lesson: this.getActiveLesson(),
          lessonKey,
          lessonPosition,
          slide: this.getActiveSlide(),
          slideKey,
          slidePosition,
          getSlideUri: this.getSlideUri,
          getFirstSlideUri: this.getFirstSlideUri,
          getLastSlideUri: this.getLastSlideUri,
        }}
      >
        {children}
      </SliderContext.Provider>
    );
  }
}

export default SliderProvider;
