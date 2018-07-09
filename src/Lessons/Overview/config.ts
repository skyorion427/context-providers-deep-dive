import overviewMD from './overview.md';
import historyMD from './history.md';
import redux_00 from './redux_00.md';
import redux_01 from './redux_01.md';
import redux_02 from './redux_02.md';

export default {
  title: 'Overview',
  description:
    'A brief course introduction to help with setting the `context`, ;)',
  github:
    'https://github.com/stephencorwin/context-providers-deep-dive/tree/master/src/Lessons/Overview',
  slides: [
    {
      title: 'Overview',
      content: overviewMD,
    },
    {
      title: 'History',
      content: historyMD,
    },
    {
      title: 'Redux',
      content: redux_00,
    },
    {
      title: 'Redux cont.',
      content: redux_01,
    },
    {
      title: 'Redux cont.',
      content: redux_02,
    },
  ],
};
