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
  box-shadow: ${({theme}: IThemeProps) => theme.shadows.default};
  margin: 0;
  padding: 0 ${({theme}: IThemeProps) => theme.spacings.sm};
  height: ${({theme}: IThemeProps) => theme.spacings.header.height};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  overflow-x: hidden;
  overflow-y: auto;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`;

export const LessonNav = styled.li`
  > a {
    background-color: ${({theme}: IThemeProps) => theme.colors.black.dark};
    box-shadow: ${({theme}: IThemeProps) => theme.shadows.default};
    color: ${({theme}: IThemeProps) => theme.colors.white};
    display: block;
    padding: ${({theme}: IThemeProps) => theme.spacings.xs};

    &:hover {
      color: ${({theme}: IThemeProps) => theme.colors.red};
    }
  }

  ul {
  }
`;

export const SlideNav = styled.li`
  > a {
    color: ${({theme}: IThemeProps) => theme.colors.white.muted};
    display: block;
    padding: ${({theme}: IThemeProps) => theme.spacings.xs};

    &.active {
      color: ${({theme}: IThemeProps) => theme.colors.red};
    }

    &:hover {
      color: ${({theme}: IThemeProps) => theme.colors.white};
    }
  }
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
