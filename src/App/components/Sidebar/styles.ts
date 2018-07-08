import styled from 'styled-components';
import {ISidebarProps} from './ISidebar';
import {rem} from 'styles/mixins/units';
import {IThemeProps} from 'styles/themes/ITheme';

export const SidebarConfig = {
  width: rem(300),
};

export const Heading = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0 ${({theme}: IThemeProps) => theme.spacings.sm};
  height: ${({theme}: IThemeProps) => theme.spacings.header.height};
`;

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
