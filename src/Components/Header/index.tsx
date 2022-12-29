import { HeaderComponent, HeaderContainer, HeaderFooter, NavComponent } from "./styles";
import Logo from "../../assets/images/hashira-ligth.png";
import Eua from "../../assets/images/eua.png"
import Brazil from "../../assets/images/brasil.png"
import git from "../../assets/svg/github-white.svg"
import linkedin from "../../assets/svg/linkedin-white.svg"
import outlook from "../../assets/svg/outlook-white.svg"

export function Header() {
  return (
    <HeaderComponent>
      <NavComponent>
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <span>Hashira</span>
        </div>

        <div className="links">
          <a href="#">Sobre</a>
          <a href="#">Tecnologias</a>
          <a href="#">Soluções</a>
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

        <div className="socialMideas">
          <a href="mailto:isaacaguiar_@hotmail.com" target="_blank"><img src={outlook} alt="Email" /></a>
          <a href="https://github.com/AguiarIsaac" target="_blank"><img src={git} alt="github" style={{width: '1.1rem'}}/></a>
          <a href="https://www.linkedin.com/in/isaac-aguiar-2b9039121/" target="_blank"><img src={linkedin} alt="Linkedin" style={{width: '1.1rem'}}/></a>
        </div>
      </HeaderFooter>
    </HeaderComponent>
  )
}