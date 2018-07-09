import * as React from 'react';
import {Router} from 'react-router-dom';
import {Slide, Fade} from '@material-ui/core';

import {IAppProps} from './IApp';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RouteWithTransition from './components/RouteWithTransition/RouteWithTransition';

import {Main} from './styles';
import SplashPage from './pages/SplashPage';
import SliderConsumer from './providers/Slider/SliderConsumer';
import {ISliderContext} from './providers/Slider/ISliderContext';
import {ILesson} from '../Lessons/ILesson';
import SlidePage from './pages/SlidePage';

const generateLessonRoutes = (lessons: ILesson[]) => () => (
  <Main>
    {lessons.map((lesson, lessonKey) =>
      lesson.slides.map((slide, slideKey) => (
        <RouteWithTransition
          component={SlidePage}
          key={`/?lesson=${lessonKey}&slide=${slideKey}`}
          path={`/?lesson=${lessonKey}&slide=${slideKey}`}
          exact
          transition={Fade}
        />
      ))
    )}
  </Main>
);

const App: React.SFC<IAppProps> = ({history}) => (
  <SliderConsumer>
    {({lessons}: ISliderContext) => (
      <Router history={history}>
        <>
          <RouteWithTransition
            component={Header}
            path="/?lesson"
            transition={Slide}
            transitionProps={{direction: 'down', timeout: 500}}
          />

          <RouteWithTransition
            component={SplashPage}
            path="/"
            exact
            transition={Fade}
          />

          <RouteWithTransition
            component={generateLessonRoutes(lessons)}
            path="/?lesson"
            transition={Fade}
          />

          <RouteWithTransition
            component={Sidebar}
            path="/?lesson"
            transition={Slide}
            transitionProps={{direction: 'left', timeout: 500}}
          />
        </>
      </Router>
    )}
  </SliderConsumer>
);

export default App;
