import * as React from 'react';
import {Router} from 'react-router-dom';
import {Slide, Fade} from '@material-ui/core';

import lessonsConfig from 'Lessons';

import {IAppProps} from './IApp';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RouteWithTransition from './components/RouteWithTransition/RouteWithTransition';

import {Main} from './styles';
import SplashPage from './pages/SplashPage';
import SliderConsumer from './providers/Slider/SliderConsumer';
import {ISliderContext} from './providers/Slider/ISliderContext';
import {ILesson} from 'Lessons/ILesson';
import SlidePage from './pages/SlidePage';
import SliderProvider from 'App/providers/Slider/SliderProvider';

const generateLessonRoutes = (lessons: ILesson[]) => () => (
  <Main>
    {lessons.map((lesson, lessonKey) =>
      lesson.slides.map((slide, slideKey) => (
        <RouteWithTransition
          component={SlidePage}
          key={`/?lesson=${lessonKey}&slide=${slideKey}`}
          path={`/?lesson=${lessonKey + 1}&slide=${slideKey + 1}`}
          exact
          transition={Fade}
          transitionProps={{timeout: 500}}
        />
      ))
    )}
  </Main>
);

const App: React.SFC<IAppProps> = ({history}) => (
  <Router history={history}>
    <SliderProvider lessons={lessonsConfig}>
      <SliderConsumer>
        {({lessons}: ISliderContext) => (
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
        )}
      </SliderConsumer>
      )}
    </SliderProvider>
  </Router>
);

export default App;
