import * as H from 'history';

export interface IAppProps extends React.HTMLAttributes<HTMLElement> {
  history: H.History;
}
