import * as React from 'react';

import {IHeaderProps} from './IHeader';
import ProgressBar from '../ProgressBar';
import {Left, Right, Content} from './styles';

const Header: React.SFC<IHeaderProps> = ({...props}) => (
  <header {...props}>
    <Left>
      <label>1/6</label>
      <ProgressBar value={1} max={6} />
    </Left>
    <Right>
      <Content>
        <h1>Overview</h1>
      </Content>
      <ProgressBar value={1} max={10} />
    </Right>
  </header>
);

export default Header;
