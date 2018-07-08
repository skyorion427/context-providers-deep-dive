import styled from 'styled-components';
import {IHeaderProps} from './IHeader';
import {IThemeProps} from 'styles/themes/ITheme';
import {SidebarConfig} from '../Sidebar/styles';
import {rem} from 'styles/mixins/units';

export const Left = styled.div`
  box-shadow: ${({theme}: IThemeProps) => theme.shadows.right};
  width: ${({theme}: IThemeProps) => theme.spacings.header.heightInner};
  position: relative;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({theme}: IThemeProps) => theme.colors.white};
    font-weight: bold;
    font-size: ${({theme}: IThemeProps) => theme.fontSizes.md};
    letter-spacing: ${rem(2)};
    height: ${({theme}: IThemeProps) => theme.spacings.header.heightInner};
  }
`;

export const Right = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  height: ${({theme}: IThemeProps) => theme.spacings.header.heightInner};
  padding: ${({theme}: IThemeProps) =>
    `${theme.spacings.xs} ${theme.spacings.sm}`};

  h1 {
    color: ${({theme}: IThemeProps) => theme.colors.white.muted};
    font-size: ${({theme}: IThemeProps) => theme.fontSizes.md};
    font-weight: normal;
    margin: 0;

    &.active {
      color: ${({theme}: IThemeProps) => theme.colors.red};
      font-weight: bold;
    }
  }
`;

export default (Header: React.SFC<IHeaderProps>) => styled(Header)`
  background-color: ${({theme}: IThemeProps) => theme.colors.gray.dark};
  position: fixed;
  top: 0;
  left: 0;
  right: ${SidebarConfig.width};
  display: flex;
  flex-direction: row;
  height: ${({theme}: IThemeProps) => theme.spacings.header.height};
  box-shadow: ${({theme}: IThemeProps) => theme.shadows.default};
  z-index: ${({theme}: IThemeProps) => theme.zindexes.header};
`;
