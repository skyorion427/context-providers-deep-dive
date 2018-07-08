import * as React from 'react';

import {ISlidePageProps} from './ISlidePage';

export const SlidePage: React.SFC<ISlidePageProps> = ({...props}) => (
  <div {...props}>Slide Page</div>
);

export default SlidePage;
