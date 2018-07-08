import styled from 'styled-components';
import {IProgressBarProps} from './IProgressBar';
import {IThemeProps} from 'styles/themes/ITheme';

export const Fill = styled.div`
  transition: 0.5s width ease-in-out;
  background-color: ${({theme}: IThemeProps) => theme.colors.red};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export default (ProgressBar: React.SFC<IProgressBarProps>) => styled(
  ProgressBar
)`
  background-color: rgba(0, 0, 0, 0.6);
  height: ${({theme}: IThemeProps) => theme.spacings.xs};
  position: relative;
`;
