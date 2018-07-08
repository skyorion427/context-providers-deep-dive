import * as React from 'react';
import {Router} from 'react-router-dom';

import {IAppProps} from './IApp';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import {Main} from './styles';

const App: React.SFC<IAppProps> = ({history}) => (
  <Router history={history}>
    <>
      <Header />
      <Main>Main</Main>
      <Sidebar />
    </>
  </Router>
);

export default App;
