import styled from 'styled-components';
import {IHeaderProps} from './IHeader';
import {IThemeProps} from 'styles/themes/ITheme';
import {rem} from 'styles/mixins/units';
import {Link} from 'react-router-dom';

export const Left = styled.div`
  box-shadow: ${({theme}: IThemeProps) => theme.shadows.right};
  width: ${({theme}: IThemeProps) => theme.spacings.header.heightInner};
  position: relative;
  z-index: ${({theme}: IThemeProps) => theme.zindexes.base};

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

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  height: ${({theme}: IThemeProps) => theme.spacings.header.heightInner};
  padding: ${({theme}: IThemeProps) =>
    `${theme.spacings.xs} ${theme.spacings.sm}`};
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  font-size: ${({theme}: IThemeProps) => theme.fontSizes.md};

  &,
  a {
    color: ${({theme}: IThemeProps) => theme.colors.white.muted};
  }

  a {
    &.active {
      color: ${({theme}: IThemeProps) => theme.colors.red};
    }

    &.active:hover,
    &:hover {
      color: ${({theme}: IThemeProps) => theme.colors.white};
    }
  }

  svg {
    margin: 0 ${({theme}: IThemeProps) => theme.spacings.xs};
    font-size: ${({theme}: IThemeProps) => theme.fontSizes.sm};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${rem(2)};
  height: 100%;
  white-space: nowrap;
  box-shadow: ${({theme}: IThemeProps) => theme.shadows.default};
  font-weight: bold;
  letter-spacing: ${rem(1)};
`;

export const LabelButton = styled(Button)`
  padding: 0 ${({theme}: IThemeProps) => theme.spacings.sm};
  background-color: ${({theme}: IThemeProps) => theme.colors.black.dark};
  color: ${({theme}: IThemeProps) => theme.colors.red};

  & + & {
    margin-left: ${({theme}: IThemeProps) => theme.spacings.xs};
  }
`;

export const IconButton = styled(Button)`
  margin-left: ${({theme}: IThemeProps) => theme.spacings.sm};
  width: ${rem(50)};
  background-color: ${({theme}: IThemeProps) => theme.colors.red};
  color: ${({theme}: IThemeProps) => theme.colors.white};
  font-size: ${({theme}: IThemeProps) => theme.fontSizes.md};
`;

export default (Header: React.SFC<IHeaderProps>) => styled(Header)`
  background-color: ${({theme}: IThemeProps) => theme.colors.gray.dark};
  position: fixed;
  top: 0;
  left: 0;
  right: ${({theme}: IThemeProps) => theme.spacings.sidebar.width};
  display: flex;
  flex-direction: row;
  height: ${({theme}: IThemeProps) => theme.spacings.header.height};
  box-shadow: ${({theme}: IThemeProps) => theme.shadows.default};
  z-index: ${({theme}: IThemeProps) => theme.zindexes.header};
`;
