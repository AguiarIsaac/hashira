import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  a {
    color: aliceblue;
    cursor: pointer;
    text-decoration: none;
  }
`