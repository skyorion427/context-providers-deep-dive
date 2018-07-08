import * as React from 'react';

import {IHeaderProps} from './IHeader';

export const Header: React.SFC<IHeaderProps> = ({...props}) => (
  <header {...props}>Header</header>
);

export default Header;
