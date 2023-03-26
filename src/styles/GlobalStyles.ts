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
    -webkit-font-smoothing: antialiased;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  a {
    color: rgb(136, 153, 166);
    cursor: pointer;
    text-decoration: none;
  }
`