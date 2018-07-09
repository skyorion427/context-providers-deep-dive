import {ISlide} from './ISlide';

export interface ILesson {
  title: string;
  description: string;
  slides: ISlide[];
}
