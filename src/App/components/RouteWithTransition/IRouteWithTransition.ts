import {TransitionProps} from 'react-transition-group/Transition';

export interface IRouteWithTransitionProps
  extends React.HTMLAttributes<HTMLElement> {
  component: any;
  transition?: any;
  transitionProps?: TransitionProps;
  path?: string;
  exact?: boolean;
  blacklist?: string[];
  extraProps?: any;
}
