import styled from 'styled-components';
import {ISidebarProps} from './ISidebar';
import {rem} from 'styles/mixins/units';
import {IThemeProps} from 'styles/themes/ITheme';

export const SidebarConfig = {
  width: rem(300),
};

export default (Sidebar: React.SFC<ISidebarProps>) => styled(Sidebar)`
  background-color: ${({theme}: IThemeProps) => theme.colors.gray.dark};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  width: ${SidebarConfig.width};
  box-shadow: ${({theme}: IThemeProps) => theme.shadows.default};
  z-index: ${({theme}: IThemeProps) => theme.zindexes.sidebar};
`;
