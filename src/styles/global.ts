import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html, body {
    width: 100%;
    height: 100%;
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    background-color:  #F4F4F2;

  }

  a{
    text-decoration: none;
    color: inherit;
  }
`;
