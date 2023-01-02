import styled from "styled-components";
import arrow from "../../assets/svg/arrow-down.svg";

export const PossibilitesSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  background: #202124;
  /* height: 820px; */


  div.line {

    border-bottom: 1px solid #BFBFBF;
    width: 80%;
    max-width: 800px;
    margin: 0 auto;
  }

  h4 {
    color: aliceblue;
    padding: 2rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 30px;
    font-weight: 100;
  }
`

export const TecnologiesComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  width: 80%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem;

  button {
    /* padding: 1.5rem; */
    cursor: pointer;
    border: 1px solid #BFBFBF;
    color: rgba(217,78,115,1);
    background: none;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    width: 14.5rem;
    height: 4.75rem;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      transition: 0.4s;
      background: rgba(217,78,115,1);
      border: 1px solid rgba(217,78,115,1);
      color:aliceblue;
      transform: scale(1.05);
      filter: drop-shadow(10px 10px 5px rgba(0,0,0,0.17));
    }

    &::after {
      content: '';
      background: url(${arrow}) center center no-repeat;
      background-size: 20px 20px;
      width: 20px;
      height: 0;
      margin-left: 0.5rem;
      transition: all 0.4s ease-in-out;
    }

    &:hover::after {
      height: 20px;
    }
  }

  button#front,
  button#back,
  button#mobile {
    background:rgba(217,78,115,1);
    color: aliceblue;
  }
`