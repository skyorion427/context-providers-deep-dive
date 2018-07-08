import * as React from 'react';

import {IProgressBarProps} from './IProgressBar';

export const ProgressBar: React.SFC<IProgressBarProps> = ({...props}) => (
  <div {...props}>ProgressBar</div>
);

export default ProgressBar;
