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
          <a href="#">Saiba mais</a>
        </div>
      </HeaderContainer>

      <HeaderFooter>
        <div className="language">
          <small>Idioma: </small>
          <div className="buttons">
            <button type="button"><img src={Brazil} alt="PT" style={{borderBottom: "1px solid #BF4F45"}}/></button>
            <button type="button"><img src={Eua} alt="ENG" /></button>
          </div>
        </div>

        <SocialMidias />
      </HeaderFooter>
    </HeaderComponent>
  )
}