import styled from "styled-components";

export const FooterElement = styled.footer`
  background: rgb(14 22 30);

  div.content {
    max-width: 1400px;
    height: 10rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 1rem;
  }

  small {
    color: #FFF;
  }

  a {
    &:hover {
      color: #BF4F45;
      transition: all 0.3s ease-in-out;
    }
  }
`