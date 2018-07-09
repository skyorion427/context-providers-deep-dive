import {ISlide} from './ISlide';

export interface ILesson {
  title: string;
  description: string;
  github?: string;
  slides: ISlide[];
}
