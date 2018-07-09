import * as React from 'react';
import {ISlide} from 'Lessons/ISlide';

export interface ISlidePageProps extends React.HTMLAttributes<HTMLElement> {
  slide: ISlide;
}
