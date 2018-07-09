import * as React from 'react';

import {IProgressBarProps} from './IProgressBar';
import {Fill} from './styles';

const ProgressBar: React.SFC<IProgressBarProps> = ({
  value = 0,
  max,
  ...props
}) => (
  <div {...props}>
    <Fill style={{width: `${value / max * 100}%`}} />
  </div>
);

export default ProgressBar;
