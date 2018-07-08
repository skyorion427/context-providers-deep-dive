import styled from 'styled-components';
import {IHeaderProps} from './IHeader';
import {rem} from 'styles/mixins/units';

export const HeaderConfig = {
  height: rem(80),
};

export default (Header: React.SFC<IHeaderProps>) => styled(Header)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${HeaderConfig.height};
`;
