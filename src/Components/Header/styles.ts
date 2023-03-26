import styled from "styled-components";

export const HeaderComponent = styled.header`
  background: rgb(21, 32, 43);
  color: #fff;
  min-height: 30rem;
`

export const NavComponent = styled.nav`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  

  div.logo {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-weight: 500;
  }

  div.logo img {
    width: 1.6rem;
  }


  div.links {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  div.links a {
    position: relative;
    transition: all 0.3s ease-in-out;
  }

  div.links a::before {
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

  div.links a:hover {
    color: #BF4F45;
  }

  div.links a:hover::before{
    width: 100%;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20rem;

  div.title {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  div.title h1 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 60px;
    font-weight: 100;
  }

  div.title span {
    letter-spacing: 4px;
    font-size: 14px;
    color: #BF4F45;
  }

  div.title {
    a {
      margin-top: 1rem;

      img {
        width: 2rem;
        transition:all .4s ease-in-out;
        &:hover {
          transform: scale(1.3);
          filter: drop-shadow(10px 10px 5px rgba(0,0,0,0.17));
        }
      }
    }
  }
`

export const HeaderFooter = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  
  div.language,
  div.buttons {
    display: flex;
    gap: 0.5rem;
  }

  div.buttons {
    button {
      border: none;
      background: none;
      width: 1.5rem;
      cursor: pointer;
    }
  }

  div.language {
    small {
      margin-bottom: 8px;
    }

    align-items: flex-end;
  }
`