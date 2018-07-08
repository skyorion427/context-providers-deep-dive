import * as React from 'react';

import {ISidebarProps} from './ISidebar';
import ConfigConsumer from '../../providers/Config/ConfigConsumer';
import {IConfigContext} from '../../providers/Config/IConfigContext';
import {Heading} from './styles';

export const Sidebar: React.SFC<ISidebarProps> = ({...props}) => (
  <ConfigConsumer>
    {({title, subTitle}: IConfigContext) => (
      <aside {...props}>
        <Heading>
          {title}
          <br />
          {subTitle}
        </Heading>
        <nav>
          <ul>
            <li>
              Chapter Title
              <ul>
                <li>Slide Title</li>
                <li>Slide Title</li>
                <li>Slide Title</li>
              </ul>
            </li>
            <li>
              Chapter Title
              <ul>
                <li>Slide Title</li>
                <li>Slide Title</li>
                <li>Slide Title</li>
              </ul>
            </li>
            <li>
              Chapter Title
              <ul>
                <li>Slide Title</li>
                <li>Slide Title</li>
                <li>Slide Title</li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>
    )}
  </ConfigConsumer>
);

export default Sidebar;
