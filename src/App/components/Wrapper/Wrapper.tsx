import * as React from 'react';
import {IWrapperProps} from './IWrapper';
import {RelativeReset} from './styles';

export const Wrapper: React.SFC<IWrapperProps> = ({children, ...props}) => (
  <div {...props}>
    <RelativeReset>{children}</RelativeReset>
  </div>
);

export default Wrapper;
