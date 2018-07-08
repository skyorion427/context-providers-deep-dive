import styled from 'styled-components';
import {IHeaderProps} from './IHeader';
import {rem} from 'styles/mixins/units';
import {IThemeProps} from 'styles/themes/ITheme';
import {SidebarConfig} from '../Sidebar/styles';

export const HeaderConfig = {
  height: rem(80),
};

export default (Header: React.SFC<IHeaderProps>) => styled(Header)`
  background-color: ${({theme}: IThemeProps) => theme.colors.gray.dark};
  position: fixed;
  top: 0;
  left: 0;
  right: ${SidebarConfig.width};
  height: ${HeaderConfig.height};
  box-shadow: ${({theme}: IThemeProps) => theme.shadows.default};
  z-index: ${({theme}: IThemeProps) => theme.zindexes.header};
`;
