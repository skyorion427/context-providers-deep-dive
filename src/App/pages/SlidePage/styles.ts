import styled from 'styled-components';
import {ISlidePageProps} from './ISlidePage';
import {IThemeProps} from 'styles/themes/ITheme';

export default (SlidePage: React.SFC<ISlidePageProps>) => styled(SlidePage)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  padding: ${({theme}: IThemeProps) => theme.spacings.md};

  h1,
  h2,
  h3,
  h4,
  p {
    margin-top: 0;
    margin-bottom: ${({theme}: IThemeProps) => theme.fontSizes.xs};
  }

  p {
    font-size: ${({theme}: IThemeProps) => theme.fontSizes.md};
  }
`;
