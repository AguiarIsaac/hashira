import styled from "styled-components";

export const SocialMidiasElement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  a {
    width: 1.4rem;
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  a::before {
    content: '';
    background-color:#BF4F45;
    display: block;
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in-out;
  }

  a:hover::before{
    width: 100%;
  }
`