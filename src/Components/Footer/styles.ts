import styled from "styled-components";

export const FooterElement = styled.footer`
  background: #1C1B21;

  div.content {
    max-width: 1400px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
  }

  div.logoContent {

    width: 15rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;

    img {
      width: 8rem;
    }

    h5 {
      font-size: 20px;
      font-weight: 300;
      color: aliceblue;
      font-family: 'Cormorant Garamond', serif;
      margin-top: -1.625rem;
    }

    p {
      color: #BFBFBF;
      font-weight: 300;
      font-family: 'Roboto', sans-serif;
    }
  }
`