import styled from 'styled-components';
import {IThemeProps} from 'styles/themes/ITheme';

export const Input = styled.input`
  border: 1px solid black;
  padding: ${({theme}: IThemeProps) => theme.spacings.xs};
`;
