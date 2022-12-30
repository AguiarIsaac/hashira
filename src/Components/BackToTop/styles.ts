import styled from "styled-components";
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const BackToTopElement = styled(AnchorLink)`
  position: fixed;
  bottom: 1rem;
  right: 2rem;
  background: #BF4F45;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  filter: drop-shadow(10px 10px 5px rgba(0,0,0,0.17));
  opacity: 0.5;

  transition: all 0.3s ease-in-out;

  svg {
    fill: aliceblue;
    width: 1rem;
  }

  &:hover {
    opacity: 1;
  }
`