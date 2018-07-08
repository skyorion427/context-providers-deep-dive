import styled from 'styled-components';
import {IWrapperProps} from './IWrapper';
import {IThemeProps} from 'styles/themes/ITheme';

export const RelativeReset = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
`;

export default (Component: React.SFC<IWrapperProps>) => styled(Component)`
  margin: 0 auto;
  width: 100%;
  padding: 0 ${({theme}: IThemeProps) => theme.spacings.lg};

  &.row {
    > div {
      display: flex;
      flex-direction: row;
    }
  }
`;
