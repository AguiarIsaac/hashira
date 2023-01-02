import { HeaderComponent, HeaderContainer, HeaderFooter, NavComponent } from "./styles";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { SocialMidias } from "../SocialMidias";
import Logo from "../../assets/images/hashira-ligth.png";
import Eua from "../../assets/images/eua.png";
import Brazil from "../../assets/images/brasil.png";

export function Header() {
  return (
    <HeaderComponent id="Home">
      <NavComponent>
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        <div className="links">
          <AnchorLink href='#About'>Sobre</AnchorLink>
          <AnchorLink href="#Services">Soluções</AnchorLink>
          <AnchorLink href='#Tecnologies'>Tecnologias</AnchorLink>
          
        </div>
      </NavComponent>

      <HeaderContainer>
        <div className="title">
          <h1>Isaac Aguiar</h1>
          <span>| Full-Stack Developer |</span>
          <AnchorLink href='#About'>Saiba mais</AnchorLink>
        </div>
      </HeaderContainer>

      <HeaderFooter>

        <SocialMidias />
      </HeaderFooter>
    </HeaderComponent>
  )
}