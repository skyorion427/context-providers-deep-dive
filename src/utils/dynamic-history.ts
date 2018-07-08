import {createBrowserHistory, createHashHistory} from 'history';

export const history = window.matchMedia(
  '(display-mode: standalone), (display-mode: fullscreen)'
).matches
  ? createHashHistory()
  : createBrowserHistory();

export default history;
