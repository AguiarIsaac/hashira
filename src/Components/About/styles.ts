import styled from "styled-components";

export const AboutSection = styled.section`
  background-color: rgb(31 48 64);
`

export const AboutElement = styled.div`
  width: 80%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem;

  h2 {
    font-size: 36px;
    font-weight: 100;
    color: #FFF;
    font-family: 'Cormorant Garamond', serif;
  }

  div.line {
    width: 5rem;
    border-bottom: 2px solid #BF4F45;
    border-radius: 7px;
    margin: 1rem 0;
  }

  p {
    max-width: 28rem;
    font-size: 18px;
    color: #cdcdcd;
    font-family: 'Cormorant Garamond', serif;
  }
`

export const GaleryElement = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  img {
    width: 16rem;
    height: 14rem;
    cursor: pointer;
    transition:all .4s ease-in-out;

    &:hover {
      transform: scale(1.05);
      filter: drop-shadow(10px 10px 5px rgba(0,0,0,0.17));
    }
  }
`

export const Services = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
  flex-wrap: wrap;

  width: 80%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2rem;
  

  h3 {
    font-size: 38px;
    color: #FFF;
    font-weight: 300;
    font-family: 'Cormorant Garamond', serif;
  }

  div.groupservices {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: stretch;
    gap: 2rem;
    width: 80%;
    margin-bottom: 4rem;
  }

  div.service {
    max-width: 16rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    text-align: center;
    justify-content: space-between;
  }

  div.service img {
    width: 6rem;
  }

  div.service h5 {
    font-size: 16px;
    font-weight: 400;
    color: #FFF;
  }

  div.service p {
    color: #cdcdcd;
    font-weight: 100;
  }

  div.service .line {
    border-bottom: 2px solid #BF4F45;
    width: 1.5rem;
    border-radius: 6px;
  }
`