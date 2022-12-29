import styled from "styled-components";

export const PossibilitesSection = styled.section`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2rem;
  background: #202124;
  height: 50rem;

  h4 {
    color: aliceblue;
    padding: 2rem;
    font-family: 'Cormorant Garamond', serif;
    font-size: 30px;
    font-weight: 100;
  }
`

export const Tecnologies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 80%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem;

  button {
    background-image: linear-gradient(90deg, rgba(191,79,69,1) 0%, rgba(217,78,115,1) 60%);
    background-clip: text;
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(rgba(0, 0, 0, 0.25) 4px 16px 24px);

    padding: 1.8rem;
    cursor: pointer;
    border: 1px solid darkgray;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
  }
`