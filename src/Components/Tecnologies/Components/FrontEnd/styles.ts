import styled from "styled-components";

export const FrontEndElement = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 4rem;
  
  img {
      width: 5rem;
    }

  div.content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
    align-items: stretch;
  }

  .content div {
    width: 15rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    h5 {
      font-size: 18px;
      /* font-weight: 700; */
      color: #FFF;
    }

    p {
      color: #cdcdcd;
      font-weight: 100;
    }
  }
`