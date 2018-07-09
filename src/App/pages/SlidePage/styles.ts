import styled from 'styled-components';
import {ISlidePageProps} from './ISlidePage';
import {IThemeProps} from 'styles/themes/ITheme';
import {rem} from 'styles/mixins/units';

export default (SlidePage: React.SFC<ISlidePageProps>) => styled(SlidePage)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 0 ${({theme}: IThemeProps) => theme.spacings.md};

  &::before,
  &::after {
    content: '';
    display: block;
    height: ${({theme}: IThemeProps) => theme.spacings.md};
  }

  /* Markdown Container */
  > div {
    max-width: ${rem(1200)};
    margin: 0 auto;
  }

  h1 {
    font-size: ${({theme}: IThemeProps) => theme.fontSizes.xl};
  }

  h2 {
    font-size: ${({theme}: IThemeProps) => theme.fontSizes.lg};
  }

  h3 {
    font-size: ${({theme}: IThemeProps) => theme.fontSizes.md};
  }

  h1,
  h2,
  h3,
  h4 {
    margin: ${({theme}: IThemeProps) => theme.spacings.md} 0;
  }

  p {
    font-size: ${({theme}: IThemeProps) => theme.fontSizes.md};
    margin: ${({theme}: IThemeProps) => theme.spacings.sm} 0;
  }

  pre {
    background-color: ${({theme}: IThemeProps) => theme.colors.black.dark};

    code {
      display: block;
      padding: ${({theme}: IThemeProps) => theme.spacings.sm};
      font-size: ${({theme}: IThemeProps) => theme.fontSizes.sm};
    }
  }

  a {
    color: ${({theme}: IThemeProps) => theme.colors.red};

    &:hover {
      color: ${({theme}: IThemeProps) => theme.colors.red.dark};
    }
  }
`;
