import * as React from 'react';
import {withRouter} from 'react-router';
import * as qs from 'query-string';
import {ISliderProviderProps, ISliderProviderState} from './ISliderContext';
import SliderContext from './index';
import {ILesson} from 'Lessons/ILesson';
import {ISlide} from 'Lessons/ISlide';

class SliderProvider extends React.Component<
  ISliderProviderProps,
  ISliderProviderState
> {
  getSlideUri = (lessonKey: number, slideKey: number) =>
    `/?lesson=${lessonKey + 1}&slide=${slideKey + 1}`;

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

  // Infinite decremental loop
  getPreviousSlideUri = () => {
    const {lessons} = this.props;
    const lessonKey = this.getActiveLessonKey() || 0;
    const slideKey = this.getActiveSlideKey() || 0;

    const newLessonKey = slideKey
      ? lessonKey
      : lessonKey - 1 >= 0
        ? lessonKey - 1
        : lessons.length - 1;

    const newSlideKey =
      newLessonKey !== lessonKey || !slideKey
        ? lessons[newLessonKey].slides.length - 1
        : slideKey - 1;

    return this.getSlideUri(newLessonKey, newSlideKey);
  };

  // Infinite incremental loop
  getNextSlideUri = () => {
    const {lessons} = this.props;
    const lesson = this.getActiveLesson() || lessons[0];
    const lessonKey = this.getActiveLessonKey() || 0;
    const slideKey = this.getActiveSlideKey() || 0;

    const newSlideKey = slideKey + 1 < lesson.slides.length ? slideKey + 1 : 0;
    const newLessonKey =
      newSlideKey > slideKey
        ? lessonKey
        : lessonKey + 1 < lessons.length
          ? lessonKey + 1
          : 0;

    return this.getSlideUri(newLessonKey, newSlideKey);
  };

  getActiveLessonKey = (): number | undefined => {
    const query = qs.parse(this.props.location.search).lesson;
    return query && parseInt(query, 10) - 1;
  };

  getActiveSlideKey = (): number | undefined => {
    const query = qs.parse(this.props.location.search).slide;
    return query && parseInt(query, 10) - 1;
  };

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

  isActiveSlide = (lessonKey: number, slideKey: number) =>
    this.getActiveLessonKey() === lessonKey &&
    this.getActiveSlideKey() === slideKey;

  render() {
    const {lessons, children} = this.props;
    const lessonKey = this.getActiveLessonKey();
    const lessonPosition = (lessonKey !== undefined && lessonKey + 1) || 0;
    const slideKey = this.getActiveSlideKey();
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
          getPreviousSlideUri: this.getPreviousSlideUri,
          getNextSlideUri: this.getNextSlideUri,
          isActiveSlide: this.isActiveSlide,
        }}
      >
        {children}
      </SliderContext.Provider>
    );
  }
}

export default withRouter(SliderProvider);
