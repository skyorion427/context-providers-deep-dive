import * as React from 'react';
import {Router} from 'react-router-dom';
import {Zoom, Slide} from '@material-ui/core';

import {IAppProps} from './IApp';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RouteWithTransition from './components/RouteWithTransition/RouteWithTransition';

import {Main} from './styles';

const App: React.SFC<IAppProps> = ({history}) => (
  <Router history={history}>
    <>
      <RouteWithTransition
        component={Header}
        transition={Slide}
        transitionProps={{direction: 'down', timeout: 500}}
      />

      <Zoom timeout={500} in>
        <Main>Main</Main>
      </Zoom>

      <RouteWithTransition
        component={Sidebar}
        transition={Slide}
        transitionProps={{direction: 'left', timeout: 500}}
      />
    </>
  </Router>
);

export default App;
