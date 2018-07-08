import {injectGlobal} from 'styled-components';
import {HeaderConfig} from 'App/components/Header/styles';
import {SidebarConfig} from 'App/components/Sidebar/styles';

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
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    color: white;
    height: 100%;
    width: 100%;
    margin: 0;
    padding-top: ${HeaderConfig.height};
    padding-right: ${SidebarConfig.width};
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
  }

  a:hover {
    color: white;
  }
`;
