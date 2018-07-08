import {injectGlobal} from 'styled-components';
import {HeaderConfig} from 'App/components/Header/styles';

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
    transition: 0.5s opacity ease-in;
    background-color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    margin: 0;
    padding-top: ${HeaderConfig.height};
    opacity: 1;
  }

  #root {
    display: flex;
    flex-direction: row;
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
  }

  a:hover {
    color: white;
  }
`;
