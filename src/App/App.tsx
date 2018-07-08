import * as React from 'react';
import {Router} from 'react-router-dom';
import {Slide, Fade} from '@material-ui/core';

import {IAppProps} from './IApp';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RouteWithTransition from './components/RouteWithTransition/RouteWithTransition';

import {Main} from './styles';
import SplashPage from './pages/SplashPage';

const App: React.SFC<IAppProps> = ({history}) => (
  <Router history={history}>
    <>
      <RouteWithTransition
        component={Header}
        path="/chapter"
        transition={Slide}
        transitionProps={{direction: 'down', timeout: 500}}
      />

      <RouteWithTransition
        component={SplashPage}
        path="/"
        exact
        transition={Fade}
        transitionProps={{timeout: 500}}
      />

      <RouteWithTransition
        component={Main}
        path="/chapter"
        transition={Fade}
        transitionProps={{timeout: 500}}
      />

      <RouteWithTransition
        component={Sidebar}
        path="/chapter"
        transition={Slide}
        transitionProps={{direction: 'left', timeout: 500}}
      />
    </>
  </Router>
);

export default App;
