import {injectGlobal} from 'styled-components';
import {spacings} from './themes/base.styles';

export default () => injectGlobal`
  * {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    overflow: hidden;
    height: 100vh;
  }

  body {
    transition: 0.5s opacity ease-in-out;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: white;
    height: 100%;
    width: 100%;
    margin: 0;
    padding-top: ${spacings.header.height};
    padding-right: ${spacings.sidebar.width};
    opacity: 1;
  }

  #root {
    height: 100%;
    position: relative;
  }

  button {
    font-size: 1rem;
  }

  p {
    line-height: 1.5em;
  }

  a {
    color: white;
    text-decoration: none;
    transition: 0.2s color ease-in-out;
  }

  a:hover {
    color: white;
  }
`;
