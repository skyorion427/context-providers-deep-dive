import styled from 'styled-components';
import {ISidebarProps} from './ISidebar';
import {rem} from 'styles/mixins/units';

export const SidebarConfig = {
  width: rem(300),
};

export default (Sidebar: React.SFC<ISidebarProps>) => styled(Sidebar)`
  width: ${SidebarConfig.width};
`;
