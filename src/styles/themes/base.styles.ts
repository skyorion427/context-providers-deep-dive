import {rem} from '../mixins/units';

export const colors = {
  black: Object.assign(String('#0c0c0c'), {
    base: '#0c0c0c',
    light: '#131313',
    dark: '#020202',
    pure: '#000000',
  }),
  white: Object.assign(String('#FFFFFF'), {
    base: '#FFFFFF',
    light: '#EBEBEB',
    dark: '#CCCCCC',
    pure: '#FFFFFF',
    muted: 'rgba(255,255,255,0.6)',
  }),
  gray: Object.assign(String('#CCCCCC'), {
    base: '#CCCCCC',
    light: '#7B8885',
    dark: '#222222',
  }),
  blue: Object.assign(String('#297ffc'), {
    base: '#297ffc',
    light: '#264d85',
    dark: '#193255',
  }),
  green: Object.assign(String('#1abc1a'), {
    base: '#1abc1a',
    light: '#1bff1b',
    dark: '#46662C',
  }),
  red: Object.assign(String('#F05330'), {
    base: '#F05330',
    light: '#FF0000',
    dark: '#BE031A',
  }),
  yellow: Object.assign(String('#EAEA00'), {
    base: '#EAEA00',
    light: '#EBEB17',
    dark: '#ffcc00',
  }),
};

export const fontSizes = {
  base: rem(16),
  xxs: rem(12),
  xs: rem(16),
  sm: rem(20),
  md: rem(28),
  lg: rem(34),
  xl: rem(40),
  xxl: rem(64),
  xxxl: rem(84),
};

export const fontWeights = {
  lightest: 100,
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700,
  boldest: 800,
};

export const fontFamilies = {
  roboto: 'Roboto, sans-serif',
};

export const spacings = {
  xxs: rem(5),
  xs: rem(10),
  sm: rem(20),
  md: rem(40),
  lg: rem(80),
  xl: rem(100),
  xxl: rem(120),

  header: {
    height: rem(80),
    heightInner: rem(70),
  },
  sidebar: {
    width: rem(300),
  },
};

export const breakpoints = {
  xs: Object.assign(String('0px'), {
    int: 0,
    px: '0px',
    em: '0em',
  }),
  sm: Object.assign(String('768px'), {
    int: 768,
    px: '768px',
    em: '48em',
  }),
  md: Object.assign(String('1024px'), {
    int: 1024,
    px: '1024px',
    em: '64em',
  }),
  lg: Object.assign(String('1200px'), {
    int: 1200,
    px: '1200px',
    em: '75em',
  }),
};

export const zindexes = {
  base: '1',
  controls: '100',
  header: '200',
  sidebar: '300',
  screen: '400',
  overlay: '500',
};

export const shadows = {
  default: `0 ${rem(2)} ${rem(4)} 0 rgba(0, 0, 0, 0.5), 0 0 ${rem(
    5
  )} 0 rgba(0, 0, 0, 0.12)`,
  right: `${rem(2)} ${rem(2)} ${rem(4)} 0 rgba(0, 0, 0, 0.5), 0 0 ${rem(
    4
  )} 0 rgba(0, 0, 0, 0.12)`,
  text: `${rem(1)} ${rem(1)} ${rem(2)} #000000`,
};

export default {
  colors,
  fontSizes,
  fontWeights,
  fontFamilies,
  spacings,
  breakpoints,
  zindexes,
  shadows,
};
