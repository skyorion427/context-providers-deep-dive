import styled from 'styled-components';
import {ISplashPageProps} from './ISplashPage';
import {IThemeProps} from 'styles/themes/ITheme';
import {rem} from 'styles/mixins/units';

export const Heading = styled.h1`
  margin: 0 0 ${({theme}: IThemeProps) => theme.spacings.xs};
`;

export const Author = styled.h2`
  display: flex;
  align-items: center;
  font-weight: normal;
  margin: 0 0 ${({theme}: IThemeProps) => theme.spacings.xs};
  text-align: center;

  &::before,
  &::after {
    content: '';
    display: flex;
    flex-grow: 1;
    background-color: ${({theme}: IThemeProps) => theme.colors.white};
    height: ${rem(2)};
  }

  &::before {
    margin-right: ${({theme}: IThemeProps) => theme.spacings.xs};
  }

  &::after {
    margin-left: ${({theme}: IThemeProps) => theme.spacings.xs};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default (SplashPage: React.SFC<ISplashPageProps>) => styled(SplashPage)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: ${({theme}: IThemeProps) => theme.zindexes.overlay};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    color: ${({theme}: IThemeProps) => theme.colors.red};
    text-align: center;
  }
`;
