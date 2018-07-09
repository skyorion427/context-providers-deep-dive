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
  extraProps,
}: any) => ({location}: any) => {
  const href = `${location.pathname}${location.search}`;
  const isExact = path === href;
  return (
    <Transition
      {...transitionProps}
      in={
        !blacklist.filter((item: string) => href === item).length &&
        (exact ? isExact : !href.indexOf(path))
      }
      mountOnEnter
      unmountOnExit
    >
      <Component {...extraProps} />
    </Transition>
  );
};

const RouteWithTransition: React.SFC<IRouteWithTransitionProps> = ({
  component: Component,
  transition: Transition,
  transitionProps,
  path,
  exact,
  blacklist = [],
  extraProps = {},
}) => (
  <Route
    render={ComponentWithTransition({
      Component,
      Transition,
      transitionProps,
      path,
      exact,
      blacklist,
      extraProps,
    })}
  />
);

export default RouteWithTransition;
