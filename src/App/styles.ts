import styled from 'styled-components';
import {IThemeProps} from 'styles/themes/ITheme';

export const Main = styled.main`
  background-color: ${({theme}: IThemeProps) => theme.colors.black};
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
`;
