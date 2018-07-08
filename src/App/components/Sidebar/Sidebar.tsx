import * as React from 'react';

import {ISidebarProps} from './ISidebar';

export const Sidebar: React.SFC<ISidebarProps> = ({...props}) => (
  <aside {...props}>Sidebar</aside>
);

export default Sidebar;
