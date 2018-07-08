import * as React from 'react';
import {Route} from 'react-router-dom';
import {IRouteWithTransitionProps} from './IRouteWithTransition';

export const ComponentWithTransition = ({
  Component,
  Transition,
  transitionProps,
  path,
  exact,
  blacklist,
}: any) => ({location, isExact}: any) => (
  <Transition
    {...transitionProps}
    in={
      !blacklist.filter((item: string) => location.pathname === item).length &&
      (path ? (exact && isExact) || location.pathname === path : true)
    }
    mountOnEnter
    unmountOnExit
  >
    <Component />
  </Transition>
);

const RouteWithTransition: React.SFC<IRouteWithTransitionProps> = ({
  component: Component,
  transition: Transition,
  transitionProps,
  path,
  exact,
  blacklist = [],
}) => (
  <Route
    render={ComponentWithTransition({
      Component,
      Transition,
      transitionProps,
      path,
      exact,
      blacklist,
    })}
  />
);

export default RouteWithTransition;
